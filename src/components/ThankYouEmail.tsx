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
  Link,
  Tailwind,
  Row,
  Column
} from '@react-email/components';

interface ThankYouEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ThankYouEmail: React.FC<Readonly<ThankYouEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Preview>Thank you for contacting Zenova Oil</Preview>
    <Tailwind>
      <Body className="font-sans">
        <Container className="mx-auto">
          <Section className="bg-green-900 py-5 px-4 text-center">
            <Heading className="text-white text-2xl font-bold m-0">Zenova Oil</Heading>
          </Section>
          
          <Section className="bg-white px-6 py-8 border-l border-r border-b border-gray-200">
            <Text className="text-gray-700">Dear {name},</Text>
            <Text className="text-gray-700">
              Thank you for reaching out to Zenova Oil. We have received your message and will get back to you as soon as possible.
            </Text>
            
            <Text className="text-gray-700">Here's a summary of the information you provided:</Text>
            <Container className="bg-gray-50 p-4 my-4 border-l-4 border-green-700">
              <Row>
                <Column>
                  <Text className="text-gray-700 m-0"><strong>Name:</strong> {name}</Text>
                  <Text className="text-gray-700 m-0"><strong>Email:</strong> {email}</Text>
                  <Text className="text-gray-700 m-0"><strong>Message:</strong></Text>
                  <Text className="text-gray-700 m-0 ml-4">{message}</Text>
                </Column>
              </Row>
            </Container>
            
            <Text className="text-gray-700">
              If you have any urgent inquiries, please don't hesitate to call us at <Link href="tel:+2347060502621" className="text-green-700">+234 706 050 2621</Link>.
            </Text>
            
            <Text className="text-gray-700 mt-6">
              Best regards,<br />
              The Zenova Oil Team
            </Text>
          </Section>
          
          <Section className="bg-gray-100 px-6 py-4 text-center">
            <Text className="text-gray-500 text-xs m-0">© 2023 Zenova Oil. All rights reserved.</Text>
            <Text className="text-gray-500 text-xs m-0">Abuja, Nigeria</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
