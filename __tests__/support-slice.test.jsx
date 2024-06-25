import reducer, { create } from '../lib/features/support/supportSlice';

describe('Testing Validation', () => {

    it('validate store', async () => {
        const payload = {
            fullName: 'John Doe',
            email: 'john@doe.com',
            issueType: 'Bug Report',
            tags: ['UI'],
            stepsToReporduce: [
                { id: 'step 1', step: 'Click Submit button' },
                { id: 'step 2', step: 'Check on the report' }
            ]
        }
        expect(reducer({
            supports: [],
            status: "idle",
        }, create(payload))).toMatchObject({
            "status": "idle",
            "supports": [payload]
        })
    });
});