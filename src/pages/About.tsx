import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Globe, TrendingUp, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To democratize real estate investment and help everyone build long-term wealth through strategic property investments.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To become the global leader in transparent, profitable, and accessible real estate investment solutions.',
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Transparency, integrity, client success, innovation, and building lasting relationships based on trust.',
    },
  ];

  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'Started with a vision to transform real estate investment' },
    { year: '2021', title: '$50M in Sales', description: 'Reached our first major milestone in property transactions' },
    { year: '2022', title: '1,000+ Investors', description: 'Built a community of successful real estate investors' },
    { year: '2023', title: 'Global Expansion', description: 'Extended services to 20+ major cities worldwide' },
    { year: '2024', title: '$500M+ Portfolio', description: 'Managing over half a billion in real estate assets' },
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      experience: '15+ years in real estate',
      description: 'Former Goldman Sachs real estate division head with expertise in global property markets.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Investments',
      experience: '12+ years in property investment',
      description: 'Specialized in identifying high-ROI opportunities and market trend analysis.',
    },
    {
      name: 'Emily Johnson',
      role: 'Client Relations Director',
      experience: '10+ years in client success',
      description: 'Dedicated to ensuring every investor achieves their financial goals.',
    },
  ];

  const stats = [
    { icon: Users, value: '2,500+', label: 'Happy Investors' },
    { icon: Award, value: '$500M+', label: 'Properties Managed' },
    { icon: Globe, value: '50+', label: 'Cities Worldwide' },
    { icon: TrendingUp, value: '15%', label: 'Average ROI' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <Badge className="mb-6 bg-accent text-accent-foreground">About InvestPortal</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Building Wealth Through
            <span className="block">Trusted Partnerships</span>
          </h1>
          <p className="text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
            Since 2020, we've been helping investors build generational wealth through 
            strategic real estate investments. Our mission is simple: make real estate 
            investment accessible, profitable, and transparent for everyone.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Our Foundation</Badge>
            <h2 className="text-4xl font-bold mb-6">What Drives Us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-8 rounded-xl bg-card border shadow-card">
                  <div className="w-16 h-16 mx-auto mb-6 gradient-secondary rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary">Our Journey</Badge>
            <h2 className="text-4xl font-bold mb-6">Key Milestones</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a startup vision to a global real estate investment platform.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-8 p-6 bg-card rounded-xl border shadow-card">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">{milestone.year}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Meet Our Team</Badge>
            <h2 className="text-4xl font-bold mb-6">Expert Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced team combines decades of real estate expertise with 
              innovative technology to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center p-8 rounded-xl bg-card border shadow-card">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.experience}</p>
                <p className="text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Success Story?
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Become part of our growing community of successful real estate investors.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg">
            Start Your Investment Journey
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;