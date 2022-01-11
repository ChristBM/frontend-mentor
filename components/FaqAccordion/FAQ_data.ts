export interface FaqInfo {
  summary: string,
  text: string
}

export const data: FaqInfo[] = [
  {
    summary: 'How many team members can I invite?',
    text: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
  },
  {
    summary: 'What is the maximum file upload size?',
    text: 'No more than 2GB. All files in your account must fit your allotted storage space.'
  },
  {
    summary: 'How do I reset my password?',
    text: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
  },
  {
    summary: 'Can I cancel my subscription?',
    text: 'Yes! Send us a message and we’ll process your request no questions asked.'
  },
  {
    summary: 'Do you provide additional support?',
    text: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
  }
]