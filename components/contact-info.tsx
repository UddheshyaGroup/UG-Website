import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import Image from "next/image";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Address",
      details: ["Sanepa, Lalitpur", "Office Location"],
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: ["+977 9805533600", "+977 9805533602"],
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: ["uddheshyastudio@gmail.com", "info@uddheshyagroup.com"],
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Business Hours",
      details: [
        "Sunday - Thursday: 9AM - 5PM",
        "Friday: 9AM - 2PM",
        "Saturday: Closed",
      ],
    },
  ];

  return (
    <Card>
      <div className="relative h-48 md:h-56 w-full bg-white rounded-t-lg p-4">
        <Image
          src="/image.png"
          alt="Contact Us"
          fill
          className="object-contain rounded-t-lg"
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
        />
      </div>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <div className="space-y-8">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-4 mt-1">{item.icon}</div>
              <div>
                <h3 className="font-medium text-lg mb-1">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
