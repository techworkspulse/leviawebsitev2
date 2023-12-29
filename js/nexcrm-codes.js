var url = 'https://www.nexcrmapis.com/cloud/toolbox/api_setNewWebLead?token=872f4033432928643fd3ecea0a8a0179&cs_token=ab3b81c06608cacb6e63d8e0e8c54016&secret_key=c40006e8bc259fae70ef5cd68406c517&user_tag=a68639196c1f804110239a24218ac3c0&task=setNewWebLead';
$.ajax({
  type: 'POST',
  url: url,
  data: {
    name,
    email,
    contact: phone,
    ...filtered
  },
  success: function (response) {

    console.log(response);
    nexcrmlog = '[NEXCRM][' + new Date() + ']:' + JSON.stringify(payload) + '- Success' + response
    console.log(nexcrmlog)
    writefilelog(nexcrmlog, dblog)
  },
  error: function (response) {
    console.log('Error:', response);
    nexcrmlog = '[NEXCRM][' + new Date() + ']:' + JSON.stringify(payload) + '- Error' + response
    console.log(nexcrmlog)
    writefilelog(nexcrmlog, dblog)
  },
});