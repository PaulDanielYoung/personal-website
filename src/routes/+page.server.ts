import { setError, superValidate } from 'sveltekit-superforms/server';
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

		// Check if email already exists in Supabase
		const { data, error: fetchError } = await supabase
			.from('subscribers')
			.select('email')
			.eq('email', form.data.email);

		if (fetchError) {
			console.error('Error fetching data: ', fetchError);
			return fail(500, { error: 'Internal Server Error' });
		}

		if (data && data.length > 0) {
			// If the email already exists in the database, return an error using setError
			return setError(form, 'email', 'Already subscribed!');
		}

		const { error: insertError } = await supabase
			.from('subscribers')
			.insert([{ email: form.data.email }]);

		if (insertError) {
			console.error('Error inserting data: ', insertError);
			return fail(500, { error: 'Internal Server Error' });
		}

		// Yep, return { form } here too
		return { form };
	}
};
