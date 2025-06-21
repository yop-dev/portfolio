# EmailJS Setup Instructions

To make the contact form fully functional, you need to set up EmailJS. Follow these steps:

## Step 1: Create an EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. Verify your account through the email they send you

## Step 2: Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Name your service `service_portfolio` (or update the code with your chosen service ID)

## Step 3: Create an Email Template
1. In your EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{to_email}}` - Your email (desilvajoner95@gmail.com)
4. Name your template `template_contact` (or update the code with your chosen template ID)

## Step 4: Get Your Public Key
1. In your EmailJS dashboard, go to "Account" > "API Keys"
2. Copy your "Public Key"

## Step 5: Update the Contact Component
1. Open `src/components/Contact.jsx`
2. Replace the placeholder values with your actual EmailJS credentials:
   ```javascript
   const serviceId = 'service_portfolio'; // Replace with your service ID
   const templateId = 'template_contact'; // Replace with your template ID
   const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual public key
   ```

## Testing
After completing the setup, test the contact form by filling it out and submitting it. You should receive an email at desilvajoner95@gmail.com with the submitted information.

## Notes
- The free plan of EmailJS allows 200 emails per month
- Make sure your email template includes all the variables used in the code
- For security reasons, consider using environment variables for your EmailJS credentials in a production environment