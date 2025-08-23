import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Home, Palette, Hammer, Calculator, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Transform your property with our award-winning interior design team.',
      features: [
        'Complete home makeovers',
        'Furniture selection & sourcing',
        '3D visualization & planning',
        'Project management',
        'ROI-focused staging',
      ],
      startingPrice: '$5,000',
      category: 'Design',
    },
    {
      icon: Hammer,
      title: 'Home Renovation',
      description: 'Professional renovation services to maximize your property value.',
      features: [
        'Kitchen & bathroom remodeling',
        'Structural improvements',
        'Energy efficiency upgrades',
        'Licensed contractors',
        'Quality guarantees',
      ],
      startingPrice: '$15,000',
      category: 'Construction',
    },
    {
      icon: Calculator,
      title: 'Mortgage Services',
      description: 'Competitive financing solutions for all your real estate needs.',
      features: [
        'Investment property loans',
        'First-time buyer programs',
        'Refinancing options',
        'Pre-approval services',
        'Competitive rates',
      ],
      startingPrice: '2.5% APR',
      category: 'Finance',
    },
    {
      icon: Shield,
      title: 'Property Insurance',
      description: 'Comprehensive insurance coverage for investors and homeowners.',
      features: [
        'Property protection',
        'Liability coverage',
        'Rental income protection',
        'Natural disaster coverage',
        'Claims assistance',
      ],
      startingPrice: '$200/month',
      category: 'Insurance',
    },
    {
      icon: Home,
      title: 'Property Management',
      description: 'Full-service property management for hassle-free ownership.',
      features: [
        'Tenant screening & placement',
        'Rent collection',
        'Maintenance coordination',
        'Financial reporting',
        '24/7 emergency support',
      ],
      startingPrice: '8% of rent',
      category: 'Management',
    },
    {
      icon: Users,
      title: 'Legal Services',
      description: 'Expert legal support for all your real estate transactions.',
      features: [
        'Contract review & drafting',
        'Due diligence support',
        'Closing assistance',
        'Dispute resolution',
        'Compliance guidance',
      ],
      startingPrice: '$500/hour',
      category: 'Legal',
    },
  ];

  const partners = [
    {
      name: 'Elite Design Studio',
      category: 'Interior Design',
      specialization: 'Luxury residential & commercial spaces',
      rating: '4.9/5',
      projects: '500+',
    },
    {
      name: 'Premier Construction Co.',
      category: 'General Contracting',
      specialization: 'High-end renovations & new builds',
      rating: '4.8/5',
      projects: '300+',
    },
    {
      name: 'Secure Mortgage Group',
      category: 'Mortgage Services',
      specialization: 'Investment & commercial financing',
      rating: '4.9/5',
      projects: '1,000+',
    },
    {
      name: 'Guardian Property Insurance',
      category: 'Insurance Services',
      specialization: 'Real estate investor coverage',
      rating: '4.7/5',
      projects: '800+',
    },
  ];

  const benefits = [
    'Pre-vetted, licensed professionals',
    'Competitive pricing for our clients',
    'Seamless project coordination',
    'Quality guarantees on all work',
    'Ongoing support and maintenance',
    'Priority scheduling for urgent needs',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <Badge className="mb-6 bg-accent text-accent-foreground">Partner Services</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Complete Solutions for
            <span className="block">Your Real Estate Needs</span>
          </h1>
          <p className="text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
            Access our network of trusted professionals for interior design, renovations, 
            financing, insurance, and more. Everything you need to maximize your property investment.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Our Services</Badge>
            <h2 className="text-4xl font-bold mb-6">Professional Services Network</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've partnered with industry-leading professionals to provide comprehensive 
              solutions for all your property needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-card p-8 rounded-xl border shadow-card hover:shadow-hover transition-smooth">
                  <div className="mb-6">
                    <div className="w-16 h-16 mb-4 gradient-primary rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <Badge variant="outline">{service.category}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-lg font-semibold text-primary">
                      From {service.startingPrice}
                    </div>
                    <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                      Get Quote
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Partners */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-secondary/10 text-secondary">Partner Benefits</Badge>
              <h2 className="text-4xl font-bold mb-6">Why Choose Our Partner Network?</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We've carefully selected and vetted each partner to ensure you receive 
                the highest quality services at competitive prices.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="gradient-primary mt-8">
                Browse All Partners
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="space-y-6">
              {partners.map((partner, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border shadow-card">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{partner.name}</h3>
                      <p className="text-primary text-sm">{partner.category}</p>
                    </div>
                    <Badge className="bg-secondary text-secondary-foreground">
                      {partner.rating}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{partner.specialization}</p>
                  <div className="text-xs text-muted-foreground">
                    {partner.projects} completed projects
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Request Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent">Request Service</Badge>
            <h2 className="text-4xl font-bold mb-6">Get Started with Professional Services</h2>
            <p className="text-xl text-muted-foreground">
              Tell us about your project and we'll connect you with the right professionals.
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
                <Label htmlFor="service">Service Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the service you need" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="interior-design">Interior Design</SelectItem>
                    <SelectItem value="renovation">Home Renovation</SelectItem>
                    <SelectItem value="mortgage">Mortgage Services</SelectItem>
                    <SelectItem value="insurance">Property Insurance</SelectItem>
                    <SelectItem value="management">Property Management</SelectItem>
                    <SelectItem value="legal">Legal Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Project Budget</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-10k">Under $10,000</SelectItem>
                    <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="over-100k">Over $100,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">Project Timeline</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="When do you need this completed?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP</SelectItem>
                    <SelectItem value="1-month">Within 1 month</SelectItem>
                    <SelectItem value="3-months">Within 3 months</SelectItem>
                    <SelectItem value="6-months">Within 6 months</SelectItem>
                    <SelectItem value="flexible">Flexible timeline</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">Project Details</Label>
                <Textarea
                  id="details"
                  placeholder="Please describe your project requirements, property details, and any specific preferences..."
                  rows={4}
                />
              </div>

              <Button size="lg" className="w-full gradient-primary text-lg py-3">
                <Home className="w-5 h-5 mr-2" />
                Submit Service Request
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Connect with our network of trusted professionals and take your 
            real estate investment to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              Browse Service Partners
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;