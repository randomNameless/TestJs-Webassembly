import os
import re
import subprocess
from bs4 import BeautifulSoup

# Folder paths
html_folder = '/home/selab/Desktop/TestJs-Webassembly'  # Set your path to the folder containing HTML files
input_js_path = 'input.js'
output_js_path = 'output.js'
config_path = '/home/selab/Desktop/wobfuscator_tool/Wobfuscator/build/config.json'  # Path to the config file for the tool
node_tool_path = '/home/selab/Desktop/wobfuscator_tool/Wobfuscator/build/index.js'  # Path to your Node tool

# Function to read file with fallback encodings
def read_file_with_encoding(file_path):
    encodings = ['utf-8', 'ISO-8859-1', 'latin1']  # List of encodings to try
    for enc in encodings:
        try:
            with open(file_path, 'r', encoding=enc) as file:
                return file.read(), enc
        except UnicodeDecodeError:
            continue
    raise UnicodeDecodeError(f"Unable to decode the file {file_path} with the available encodings.")

# Iterate over all HTML files in the folder
for filename in os.listdir(html_folder):
    if filename.endswith('.html'):
        html_file_path = os.path.join(html_folder, filename)

        # Try to read the HTML file with different encodings
        try:
            html_content, encoding_used = read_file_with_encoding(html_file_path)
            print(f"Successfully read {filename} using {encoding_used} encoding.")
        except UnicodeDecodeError as e:
            print(f"Error reading {filename}: {e}")
            continue

        # Parse the HTML
        soup = BeautifulSoup(html_content, 'html.parser')

        # Find the <script> tag with JavaScript code
        script_tag = soup.find('script')
        if script_tag and script_tag.string:
            js_code = script_tag.string.strip()

            # Write the JavaScript code to input.js
            with open(input_js_path, 'w', encoding='utf-8') as input_js_file:
                input_js_file.write(js_code)

            # Run the tool to generate output.js
            subprocess.run(['node', node_tool_path, '-f', input_js_path, '-o', output_js_path, '-c', config_path])

            # Read the generated output.js code
            with open(output_js_path, 'r', encoding='utf-8') as output_js_file:
                output_js_code = output_js_file.read().strip()

            # Replace the JavaScript in the <script> tag with the new code from output.js
            script_tag.string.replace_with(output_js_code)

            # Save the modified HTML back to the file
            with open(html_file_path, 'w', encoding='utf-8') as modified_html_file:
                modified_html_file.write(str(soup))

print("All HTML files have been processed.")

