const addrsMapping = ((addrs) => {
  return addrs.map((addr, index) => {
    const lastOctet = index > 9 ? index : "0" + index;
    masked = addr.substring(0, 9) + "XX:XX:" + lastOctet;
    return { raw: addr, masked: masked };
  });
})(macAddrs);

// Copy this result on the console,
// then save it as a JSON file,
// then use in to replace by regex
console.log(JSON.stringify(addrsMapping));
