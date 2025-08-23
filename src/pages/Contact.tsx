import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
      description: 'Mon-Fri 8AM-8PM, Sat-Sun 9AM-5PM',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@investportal.com', 'support@investportal.com'],
      description: 'We respond within 2 hours',
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['123 Investment Street', 'Financial District, NY 10004'],
      description: 'Visits by appointment only',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 8:00 AM - 8:00 PM', 'Sat-Sun: 9:00 AM - 5:00 PM'],
      description: '24/7 emergency support available',
    },
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: '#' },
    { icon: Twitter, name: 'Twitter', href: '#' },
    { icon: Instagram, name: 'Instagram', href: '#' },
    { icon: Linkedin, name: 'LinkedIn', href: '#' },
  ];

  const officeLocations = [
    {
      city: 'New York',
      address: '123 Investment Street, Financial District, NY 10004',
      phone: '+1 (555) 123-4567',
      manager: 'Sarah Chen',
    },
    {
      city: 'Los Angeles',
      address: '456 Sunset Boulevard, Beverly Hills, CA 90210',
      phone: '+1 (555) 987-6543',
      manager: 'Michael Rodriguez',
    },
    {
      city: 'Miami',
      address: '789 Ocean Drive, South Beach, FL 33139',
      phone: '+1 (555) 456-7890',
      manager: 'Emily Johnson',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <Badge className="mb-6 bg-accent text-accent-foreground">Contact Us</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Discuss Your
            <span className="block">Investment Goals</span>
          </h1>
          <p className="text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
            Our expert team is ready to help you achieve your real estate investment 
            objectives. Reach out today for personalized guidance and support.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Get In Touch</Badge>
            <h2 className="text-4xl font-bold mb-6">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the communication method that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl bg-card border shadow-card hover:shadow-hover transition-smooth">
                  <div className="w-16 h-16 mx-auto mb-6 gradient-primary rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-primary font-medium">
                        {detail}
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </div>
              );
            })}
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-dark transition-smooth"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary">Send us a Message</Badge>
            <h2 className="text-4xl font-bold mb-6">Start the Conversation</h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we'll get back to you within 2 hours.
            </p>
          </div>

          <div className="form-section max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email address" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="What can we help you with?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="investment">Investment Opportunities</SelectItem>
                    <SelectItem value="buying">Buying a Property</SelectItem>
                    <SelectItem value="selling">Selling a Property</SelectItem>
                    <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                    <SelectItem value="services">Professional Services</SelectItem>
                    <SelectItem value="support">General Support</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="urgency">Urgency Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="How urgent is your inquiry?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - General inquiry</SelectItem>
                    <SelectItem value="medium">Medium - Within a week</SelectItem>
                    <SelectItem value="high">High - Within 24 hours</SelectItem>
                    <SelectItem value="urgent">Urgent - ASAP</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Please provide details about your inquiry, investment goals, timeline, or any specific questions you have..."
                  rows={6}
                />
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="newsletter" className="rounded" />
                <Label htmlFor="newsletter" className="text-sm">
                  I'd like to receive updates about new investment opportunities and market insights
                </Label>
              </div>

              <Button size="lg" className="w-full gradient-primary text-lg py-3">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent">Our Locations</Badge>
            <h2 className="text-4xl font-bold mb-6">Visit Our Offices</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We have offices in major metropolitan areas to better serve our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-card p-8 rounded-xl border shadow-card hover:shadow-hover transition-smooth">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{office.city} Office</h3>
                  <div className="w-12 h-1 gradient-primary rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{office.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{office.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Office Manager: {office.manager}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-6 hover:bg-primary hover:text-primary-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Visit
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Don't wait to begin your real estate investment journey. 
            Contact us today and let's turn your financial goals into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg">
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              Call Now: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;