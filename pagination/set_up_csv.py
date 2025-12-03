#!/usr/bin/python3

import csv
import requests

# URL to the CSV file
url = "https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/misc/2020/5/7d3576d97e7560ae85135cc214ffe2b3412c51d7.csv"

# Download the CSV file
response = requests.get(url)
response.raise_for_status()  # Check if the request was successful

# Save to a local file
with open('Popular_Baby_Names.csv', 'wb') as f:
    f.write(response.content)
