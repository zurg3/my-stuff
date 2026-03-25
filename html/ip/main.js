const {parse_data} = lib;

const output = document.getElementById('output');

async function get_ip_info() {
  const ip_address = await parse_data('https://api.ipify.org', 'text');
  const ip_info = await parse_data(`https://www.iplocate.io/api/lookup/${ip_address}`, 'json');

  //console.log(ip_info);

  let data = [];

  data.push(
    `IP: ${ip_info.ip}`,
    `Location: ${ip_info.city}, ${ip_info.country} (${ip_info.country_code})`,
    `ASN: ${ip_info.asn.name}/${ip_info.asn.netname}`,
    `Route: ${ip_info.asn.route}`
  );

  data = data.join('\n');

  output.innerText = data;
}

get_ip_info();
