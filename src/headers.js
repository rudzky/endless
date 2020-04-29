const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic OWNmYTQ1MmFiZGJkNDNkOGE3ZmRhMjNjNzQ2ZjRhMTg6MWI2ZjY0ZDhlNzYxNGJjYzllOGExYWNlM2FkYmViMDI=");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "__Host-device_id=AQAlbBPUhRGKHOyuDhDnSpLYq_AZkf4GTug_UDeN4jSpSK-L_o5Pcv7nruPGLEndwZzpPm2_jJeGoayPBzzccg34gIg7HMfncA0");

const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");

const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
};

export { myHeaders, urlencoded, requestOptions };
