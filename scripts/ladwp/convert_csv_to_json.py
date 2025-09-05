#!/usr/bin/env python3
"""
Filter LADWP employees from California State Controller 2024 City Employees CSV
and export to JSON for use in a SvelteKit static site.
"""

import csv
import json
from pathlib import Path

# ---- CONFIG ----
INPUT_CSV = "data/raw/2024_City.csv"
OUTPUT_JSON = "static/data/ladwp_2024.json"

EMPLOYER_NAME_FILTER = "Los Angeles"
DEPARTMENT_FILTER = "Los Angeles Department Of Water And Power"

# ---- SCRIPT ----
def main():
    input_path = Path(INPUT_CSV)
    output_path = Path(OUTPUT_JSON)

    if not input_path.exists():
        raise FileNotFoundError(f"CSV file not found: {input_path}")

    # Ensure output directory exists
    output_path.parent.mkdir(parents=True, exist_ok=True)

    # --- Detect encoding and delimiter using a sample ---
    def sniff_encoding_and_delimiter(path: Path) -> tuple[str, str]:
        with path.open("rb") as bf:
            sample_bytes = bf.read(65536)
        
        # Try multiple encodings in order of preference
        encodings_to_try = ["utf-8", "cp1252", "iso-8859-1", "utf-16"]
        encoding = None
        sample_text = None
        
        for enc in encodings_to_try:
            try:
                sample_text = sample_bytes.decode(enc)
                encoding = enc
                print(f"Successfully detected encoding: {encoding}")
                break
            except UnicodeDecodeError:
                continue
        
        if encoding is None:
            # Last resort - use cp1252 with error replacement
            encoding = "cp1252"
            sample_text = sample_bytes.decode(encoding, errors="replace")
            print(f"Fallback to encoding: {encoding} (with error replacement)")
        
        # Detect delimiter
        try:
            dialect = csv.Sniffer().sniff(sample_text, delimiters=[",", "\t", ";", "|"])
            delimiter = dialect.delimiter
        except csv.Error:
            delimiter = ","
        
        print(f"Detected delimiter: '{delimiter}'")
        return encoding, delimiter

    encoding, delimiter = sniff_encoding_and_delimiter(input_path)

    filtered_rows = []

    # Parse the CSV with detected settings
    with input_path.open(newline="", encoding=encoding, errors="replace") as csvfile:
        reader = csv.DictReader(csvfile, delimiter=delimiter)

        for row in reader:
            if (
                row.get("EmployerName") == EMPLOYER_NAME_FILTER
                and row.get("DepartmentOrSubdivision") == DEPARTMENT_FILTER
            ):
                # Convert numeric fields from strings → floats where possible
                for key in [
                    "MinPositionSalary", "MaxPositionSalary",
                    "ReportedBaseWage", "RegularPay", "OvertimePay",
                    "LumpSumPay", "OtherPay", "TotalWages",
                    "DefinedBenefitPlanContribution", "EmployeesRetirementCostCovered",
                    "DeferredCompensationPlan", "HealthDentalVision",
                    "TotalRetirementAndHealthContribution"
                ]:
                    value = row.get(key)
                    if value is None:
                        continue
                    cleaned = value.replace(",", "").replace("$", "").strip()
                    if cleaned in ("", "null"):
                        continue
                    try:
                        row[key] = float(cleaned)
                    except ValueError:
                        # Leave original value if it cannot be parsed
                        pass

                filtered_rows.append(row)

    with output_path.open("w", encoding="utf-8") as f:
        json.dump(filtered_rows, f, indent=2, ensure_ascii=False)

    print(
        f"Filtered {len(filtered_rows)} LADWP records → {output_path} "
        f"(encoding={encoding}, delimiter='{delimiter}')"
    )


if __name__ == "__main__":
    main()
