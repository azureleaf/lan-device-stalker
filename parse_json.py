import json


def parse_json(fi_path, fo_path):
    '''
        Save essential data in the large JSON file
        as constant in the JS to reduce the file size
    '''
    with open(fi_path, 'r') as fi:
        with open(fo_path, "w") as fo:
            fo.write("const vendors = [\n")
            for line in fi:
                data = json.loads(line)

                # replace double quotation symbol with single one
                data["companyName"] = data["companyName"].replace("\"", "\'")
                fo.write(
                    f'  [\"{data["oui"]}\", \"{data["companyName"]}\"],\n')
            fo.write("]\n")


if __name__ == "__main__":
    parse_json(
        'macaddress.io-db.json',
        "mac_vendor.js"
    )
