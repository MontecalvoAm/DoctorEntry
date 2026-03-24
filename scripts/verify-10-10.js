async function testRateLimiting() {
    console.log('Testing rate limiting on /api/doctors...');
    const API_URL = 'http://localhost:3000/api/doctors';

    // We'll send multiple requests in quick succession
    // Note: This requires the server to be running and UPSTASH_REDIS_REST_URL to be configured
    for (let i = 1; i <= 5; i++) {
        console.log(`Request ${i}...`);
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    surname: 'Test',
                    givenName: 'Doctor',
                    specialty: 'Testing',
                    department: 'Verification',
                    email: `test${i}@example.com`,
                    captchaToken: 'dummy-token' // Will fail captcha but should hit rate limit first or after
                })
            });

            console.log(`Status: ${response.status}`);
            const data = await response.json();
            console.log('Response:', data);

            if (response.status === 429) {
                console.log('✅ Rate limit hit! (429 Too Many Requests)');
                break;
            }
        } catch (error) {
            console.error(`Error on request ${i}:`, error.message);
        }
    }
}

testRateLimiting();
