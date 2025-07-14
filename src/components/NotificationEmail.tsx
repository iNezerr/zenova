import * as React from 'react';
import { 
  Html, 
  Body, 
  Head, 
  Heading, 
  Hr, 
  Container, 
  Preview, 
  Section, 
  Text, 
  Tailwind
} from '@react-email/components';

interface NotificationEmailProps {
  name: string;
  email: string;
  message: string;
}

export const NotificationEmail: React.FC<Readonly<NotificationEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission from {name}</Preview>
    <Tailwind>
      <Body className="bg-white font-sans">
        <Container className="p-8 mx-auto bg-white">
          <Heading className="text-2xl font-bold text-gray-800">New Contact Form Submission</Heading>
          <Hr className="my-4" />
          <Section>
            <Text className="text-md font-medium text-gray-700"><strong>Name:</strong> {name}</Text>
            <Text className="text-md font-medium text-gray-700"><strong>Email:</strong> {email}</Text>
            <Text className="text-md font-medium text-gray-700"><strong>Message:</strong></Text>
            <Text className="text-md text-gray-700 bg-gray-50 p-4 border-l-4 border-gray-200">{message}</Text>
          </Section>
          <Hr className="my-4" />
          <Text className="text-sm text-gray-500">This email was sent from the Zenova Oil contact form.</Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
