function redirectToZoom() {
    const zoomLink = document.getElementById('zoomLink').value;
    const meetingIdMatch = zoomLink.match(/us\/j\/(\d+)\?/);
    const pwdMatch = zoomLink.match(/pwd=([a-zA-Z0-9.]+)/);

    if (meetingIdMatch && meetingIdMatch[1] && pwdMatch && pwdMatch[1]) {
        const meetingId = meetingIdMatch[1];
        const password = pwdMatch[1];
        const redirectUrl = `https://app.zoom.us/wc/${meetingId}/join?pwd=${password}&fromPWA=1`;
        window.location.href = redirectUrl;
    } else {
        alert("Invalid Zoom link. Please make sure it contains a meeting ID and password.");
    }
}
