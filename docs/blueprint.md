# **App Name**: StarRise Network

## Core Features:

- User Authentication: User registration and login with Firebase Authentication, supporting email/password and phone OTP methods.
- Informational Pages: Display static content pages including Home, About, Mission & Vision, Plans, How-It-Works, Terms & Conditions, and Support/Contact.
- Ad-View Engine: Enable users to view one advertisement per day. Log completion time, timestamp, and device fingerprint hash as completion proof.
- User Dashboard: Show the user their current balance, ad status, directs, team counts per level, and upcoming eligibility.
- Telegram Verification: Enable the user to join the official Telegram channel and verify to receive a one-time credit. Ensure the verification is only claimable once.
- AI Content Enhancement: Suggest personalized, inspirational messages for display on the About/Mission/Vision section content. The tool selects text with 'people-first', 'direct selling', 'mentorship', and 'financial freedom' vibes, consistent with the PDF content tonality.
- Admin Dashboard: Implement admin dashboard for manual payment approvals, KYC approvals, and withdraw approvals.
- Configurable Settings: Provide a configurable settings section in the admin dashboard to modify level rates, daily ad income, and reward conditions.
- Referral Tree: Implement a 5-level referral tree data structure to facilitate earning calculations.
- Directs and Team Counts UI: Display directs and team counts as basic numbers on the UI.
- Earning Ledger: Display a list of recent transactions in addition to the total wallet balance.
- Ad-View Limit Enforcement: Enforce the one-ad-per-day rule using a server timestamp check.
- Telegram Bonus Limit: Enforce the Telegram bonus to be claimable only once per user.
- AI Content Injection: Inject AI-processed inspirational text into the About/Mission/Vision section, with a placeholder for future auto-refresh capabilities using Gemini/Genkit.

## Style Guidelines:

- Primary color: Deep indigo (#4B0082) to convey trust, depth, and a sense of aspiration.
- Background color: Very light indigo (#F0F8FF) providing a clean and unobtrusive backdrop.
- Accent color: Violet (#8A2BE2) to highlight key interactive elements and calls to action.
- Font pairing: 'Poppins' (sans-serif) for headlines and 'PT Sans' (sans-serif) for body text to balance modernity with readability.
- Mobile-first responsive design with PWA support, ensuring the app is accessible and functional on all devices.
- Use clear and modern icons to represent different functionalities and features within the app.
- Subtle animations and transitions to provide feedback to user interactions, enhancing the overall user experience without being distracting.