
const gbp_url = 'https://api.nbp.pl/api/exchangerates/rates/a/gbp/?format=json';
 
async function getCurrency() {
  let response = await fetch(gbp_url);
  let json = await response.json();
  return json.rates[0].mid;
}
async function run() {
  const gbp = await getCurrency();
  console.log(gbp);
  $('p').text('1 GBP = '+gbp+' PLN')
  $('input').eq(0).on('input', function() {
    $('input').eq(1).val((this.value*gbp).toFixed(2))
});
$('input').eq(1).on('input', function() {
    $('input').eq(0).val((this.value/gbp).toFixed(2))
});
}
run()

