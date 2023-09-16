import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { supabase } from '$lib/supabaseClient';

import type { Actions, PageServerLoad } from './$types';

const schema = z.object({
	email: z.string().email()
});

export const load: PageServerLoad = async () => {
	// Server API:
	const form = await superValidate(schema);

	// Always return { form } in load and form actions.
	return { form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		// Use superValidate in form actions too, but with the request
		const form = await superValidate(request, schema);
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { form });
		}

		const { error } = await supabase.from('subscribers').insert([{ email: form.data.email }]);

		if (error) {
			console.error('Error inserting data: ', error);
			return fail(500, { error: 'Internal Server Error' });
		}

		// Yep, return { form } here too
		return { form };
	}
};
