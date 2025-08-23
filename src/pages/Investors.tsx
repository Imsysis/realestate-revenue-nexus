import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { TrendingUp, Shield, DollarSign, Users, CheckCircle, BarChart3, PieChart, Target } from 'lucide-react';

const Investors = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'High Returns',
      description: 'Average ROI of 12-18% annually with our carefully vetted investment opportunities.',
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Diversified portfolio management and thorough due diligence on every property.',
    },
    {
      icon: DollarSign,
      title: 'Passive Income',
      description: 'Generate steady monthly returns without the hassles of property management.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated investment advisors and 24/7 support for all your investment needs.',
    },
  ];

  const investmentTypes = [
    {
      title: 'Residential Properties',
      roi: '8-12%',
      minInvestment: '$50,000',
      description: 'Single-family homes and condos in high-growth areas with strong rental demand.',
      features: ['Stable rental income', 'Property appreciation', 'Tax benefits', 'Professional management'],
    },
    {
      title: 'Commercial Real Estate',
      roi: '12-18%',
      minInvestment: '$100,000',
      description: 'Office buildings, retail spaces, and mixed-use developments in prime locations.',
      features: ['Higher yields', 'Long-term leases', 'Professional tenants', 'Portfolio diversification'],
    },
    {
      title: 'Off-Plan Developments',
      roi: '15-25%',
      minInvestment: '$75,000',
      description: 'Pre-construction projects with significant upside potential and early-bird pricing.',
      features: ['Below-market pricing', 'Capital appreciation', 'Modern amenities', 'First pick of units'],
    },
  ];

  const performance = [
    { period: '2023', portfolio: '$450M', investors: '2,100+', avgReturn: '14.2%' },
    { period: '2022', portfolio: '$320M', investors: '1,800+', avgReturn: '16.8%' },
    { period: '2021', portfolio: '$180M', investors: '1,200+', avgReturn: '12.5%' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <Badge className="mb-6 bg-accent text-accent-foreground">For Investors</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Build Wealth with
            <span className="block">Strategic Real Estate</span>
          </h1>
          <p className="text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
            Join over 2,500 investors who trust us with their real estate investments. 
            Generate passive income and build long-term wealth with our proven investment strategies.
          </p>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Why Invest With Us</Badge>
            <h2 className="text-4xl font-bold mb-6">Your Success is Our Priority</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine decades of real estate expertise with cutting-edge technology 
              to deliver exceptional investment opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl bg-card border shadow-card hover:shadow-hover transition-smooth">
                  <div className="w-16 h-16 mx-auto mb-6 gradient-primary rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary">Investment Opportunities</Badge>
            <h2 className="text-4xl font-bold mb-6">Choose Your Investment Path</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diversify your portfolio with our range of carefully selected investment options.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {investmentTypes.map((type, index) => (
              <div key={index} className="bg-card p-8 rounded-xl border shadow-card hover:shadow-hover transition-smooth">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <Badge className="bg-secondary text-secondary-foreground">
                      <BarChart3 className="w-3 h-3 mr-1" />
                      {type.roi} ROI
                    </Badge>
                    <span className="text-muted-foreground">Min: {type.minInvestment}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">{type.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full gradient-primary">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Track Record */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent">Track Record</Badge>
            <h2 className="text-4xl font-bold mb-6">Proven Performance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our consistent track record of delivering exceptional returns speaks for itself.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-card border rounded-xl shadow-card">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Year</th>
                  <th className="px-6 py-4 text-left font-semibold">Portfolio Value</th>
                  <th className="px-6 py-4 text-left font-semibold">Active Investors</th>
                  <th className="px-6 py-4 text-left font-semibold">Average Return</th>
                </tr>
              </thead>
              <tbody>
                {performance.map((year, index) => (
                  <tr key={index} className="border-t hover:bg-muted/50 transition-smooth">
                    <td className="px-6 py-4 font-medium">{year.period}</td>
                    <td className="px-6 py-4 text-primary font-semibold">{year.portfolio}</td>
                    <td className="px-6 py-4">{year.investors}</td>
                    <td className="px-6 py-4">
                      <Badge className="bg-secondary text-secondary-foreground">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {year.avgReturn}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Investor Signup Form */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Join Our Network</Badge>
            <h2 className="text-4xl font-bold mb-6">Become an Investor Today</h2>
            <p className="text-xl text-muted-foreground">
              Complete the form below to start your real estate investment journey with us.
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
                <Label htmlFor="investment">Investment Amount</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your investment range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                    <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                    <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                    <SelectItem value="1m+">$1,000,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Investment Experience</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                    <SelectItem value="experienced">Experienced (5+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals">Investment Goals</Label>
                <Textarea
                  id="goals"
                  placeholder="Tell us about your investment goals and preferences..."
                  rows={4}
                />
              </div>

              <Button size="lg" className="w-full gradient-primary text-lg py-3">
                <Target className="w-5 h-5 mr-2" />
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Building Wealth?
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Join thousands of investors who are already generating passive income 
            through our proven real estate investment platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              Download Investment Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investors;