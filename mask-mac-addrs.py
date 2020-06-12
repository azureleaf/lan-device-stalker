import re
import json

# Read the mapping
with open("./macAddrsMapping.json") as fjson:
    mappings = json.load(fjson)

# Read the JS file which includes the sensitive information
with open("./history.js") as fjs:
    js_str = fjs.read()

for mapping in mappings:
    js_str = js_str.replace(mapping["raw"], mapping["masked"])

with open("./historyMasked.js", mode='w') as fout:
    fout.write(js_str)
