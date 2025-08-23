import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { DollarSign, Users, TrendingUp, Award, CheckCircle, Percent, Target, Handshake } from 'lucide-react';

const Affiliates = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'High Commissions',
      description: 'Earn up to 3% commission on every successful property sale or investment.',
    },
    {
      icon: Users,
      title: 'Marketing Support',
      description: 'Access professional marketing materials, training, and ongoing support.',
    },
    {
      icon: TrendingUp,
      title: 'Recurring Income',
      description: 'Build a sustainable income stream with recurring commissions and bonuses.',
    },
    {
      icon: Award,
      title: 'Recognition Program',
      description: 'Join our elite partner network and get recognized for your achievements.',
    },
  ];

  const commissionStructure = [
    {
      tier: 'Bronze Partner',
      requirement: '1-10 referrals/year',
      commission: '1.5%',
      bonus: 'Marketing materials',
      color: 'bg-orange-100 text-orange-800',
    },
    {
      tier: 'Silver Partner',
      requirement: '11-25 referrals/year',
      commission: '2.0%',
      bonus: '$5,000 quarterly bonus',
      color: 'bg-gray-100 text-gray-800',
    },
    {
      tier: 'Gold Partner',
      requirement: '26-50 referrals/year',
      commission: '2.5%',
      bonus: '$15,000 quarterly bonus',
      color: 'bg-yellow-100 text-yellow-800',
    },
    {
      tier: 'Platinum Partner',
      requirement: '50+ referrals/year',
      commission: '3.0%',
      bonus: '$30,000 quarterly bonus',
      color: 'bg-purple-100 text-purple-800',
    },
  ];

  const features = [
    'Real-time commission tracking dashboard',
    'Dedicated affiliate manager support',
    'Exclusive partner events and networking',
    'Advanced analytics and reporting tools',
    'Custom landing pages for your referrals',
    'Priority support and faster payouts',
    'Co-marketing opportunities',
    'Access to pre-market property deals',
  ];

  const steps = [
    {
      step: '1',
      title: 'Apply to Join',
      description: 'Complete our affiliate application form and get approved within 24 hours.',
    },
    {
      step: '2',
      title: 'Get Your Links',
      description: 'Receive your unique referral links and access to our marketing portal.',
    },
    {
      step: '3',
      title: 'Start Referring',
      description: 'Share properties with your network and start earning commissions.',
    },
    {
      step: '4',
      title: 'Earn & Grow',
      description: 'Track your earnings and level up to higher commission tiers.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <Badge className="mb-6 bg-accent text-accent-foreground">Affiliate Program</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Partner with Us &
            <span className="block">Earn Exceptional Rewards</span>
          </h1>
          <p className="text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
            Join our exclusive affiliate network and earn substantial commissions by 
            referring high-quality investors to our premium real estate opportunities.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Partnership Benefits</Badge>
            <h2 className="text-4xl font-bold mb-6">Why Partner with InvestPortal?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer the most rewarding affiliate program in the real estate industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl bg-card border shadow-card hover:shadow-hover transition-smooth">
                  <div className="w-16 h-16 mx-auto mb-6 gradient-secondary rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent">Commission Structure</Badge>
            <h2 className="text-4xl font-bold mb-6">Tiered Reward System</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The more you refer, the more you earn. Our tiered system rewards top performers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commissionStructure.map((tier, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border shadow-card hover:shadow-hover transition-smooth">
                <div className="text-center mb-6">
                  <Badge className={`${tier.color} mb-3`}>
                    {tier.tier}
                  </Badge>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {tier.commission}
                  </div>
                  <p className="text-sm text-muted-foreground">{tier.requirement}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Percent className="w-4 h-4 text-secondary mr-2" />
                    Commission per sale
                  </div>
                  <div className="flex items-center text-sm">
                    <Award className="w-4 h-4 text-secondary mr-2" />
                    {tier.bonus}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-secondary/10 text-secondary">Program Features</Badge>
              <h2 className="text-4xl font-bold mb-6">Everything You Need to Succeed</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We provide comprehensive support and tools to help you maximize 
                your earning potential as our affiliate partner.
              </p>
              
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-xl border shadow-card">
              <h3 className="text-2xl font-semibold mb-6 text-center">Earnings Calculator</h3>
              <div className="space-y-6">
                <div>
                  <Label className="text-sm text-muted-foreground">Monthly Referrals</Label>
                  <div className="text-3xl font-bold text-primary">5</div>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground">Average Property Value</Label>
                  <div className="text-3xl font-bold text-primary">$850,000</div>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground">Commission Rate</Label>
                  <div className="text-3xl font-bold text-secondary">2.0%</div>
                </div>
                <div className="pt-4 border-t">
                  <Label className="text-sm text-muted-foreground">Monthly Earnings</Label>
                  <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">
                    $85,000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">How It Works</Badge>
            <h2 className="text-4xl font-bold mb-6">Simple 4-Step Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Getting started as our affiliate partner is quick and straightforward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary">Join Our Network</Badge>
            <h2 className="text-4xl font-bold mb-6">Apply to Become an Affiliate</h2>
            <p className="text-xl text-muted-foreground">
              Complete the application below and start earning commissions within 24 hours.
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
                <Label htmlFor="company">Company/Organization</Label>
                <Input id="company" placeholder="Enter your company name (optional)" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Real Estate Experience</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No prior experience</SelectItem>
                    <SelectItem value="beginner">1-2 years</SelectItem>
                    <SelectItem value="intermediate">3-5 years</SelectItem>
                    <SelectItem value="experienced">5+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="network">Network Size</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Estimate your network size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Under 100 contacts</SelectItem>
                    <SelectItem value="medium">100-500 contacts</SelectItem>
                    <SelectItem value="large">500-1,000 contacts</SelectItem>
                    <SelectItem value="enterprise">1,000+ contacts</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation">Why do you want to join our affiliate program?</Label>
                <Textarea
                  id="motivation"
                  placeholder="Tell us about your motivation and how you plan to promote our services..."
                  rows={4}
                />
              </div>

              <Button size="lg" className="w-full gradient-secondary text-lg py-3">
                <Handshake className="w-5 h-5 mr-2" />
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
            Ready to Start Earning?
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Join our elite affiliate network and start building a sustainable income stream 
            through high-quality real estate referrals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              Download Partner Kit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Affiliates;