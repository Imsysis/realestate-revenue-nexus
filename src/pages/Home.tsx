import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PropertyCard from '@/components/PropertyCard';
import { ArrowRight, TrendingUp, Shield, Users, Star, CheckCircle } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

const Home = () => {
  const featuredProperties = [
    {
      id: '1',
      title: 'Modern Luxury Villa',
      location: 'Beverly Hills, CA',
      price: '$2,450,000',
      image: property1,
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 3200,
      type: 'sale' as const,
    },
    {
      id: '2',
      title: 'Downtown Apartment Complex',
      location: 'Manhattan, NY',
      price: '$1,850,000',
      image: property2,
      type: 'investment' as const,
      roi: '8.5%',
    },
    {
      id: '3',
      title: 'Waterfront Penthouse',
      location: 'Miami Beach, FL',
      price: '$3,200,000',
      image: property3,
      bedrooms: 3,
      bathrooms: 4,
      squareFeet: 2800,
      type: 'off-plan' as const,
    },
  ];

  const stats = [
    { value: '$500M+', label: 'Properties Sold' },
    { value: '2,500+', label: 'Happy Clients' },
    { value: '15%', label: 'Average ROI' },
    { value: '50+', label: 'Cities Worldwide' },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: 'High ROI Investments',
      description: 'Average returns of 12-18% annually on our curated investment properties.',
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Bank-level security and full legal compliance for all transactions.',
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Dedicated investment advisors with 20+ years of market experience.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Real estate investment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <Badge className="mb-6 bg-accent text-accent-foreground text-sm px-4 py-2">
            <Star className="w-4 h-4 mr-2" />
            Trusted by 2,500+ Investors
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Build Wealth Through
            <span className="block gradient-accent bg-clip-text text-transparent">
              Smart Real Estate
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover premium investment opportunities with guaranteed returns. 
            Join thousands of investors building generational wealth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg">
              Start Investing Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              Browse Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Why Choose Us</Badge>
            <h2 className="text-4xl font-bold mb-6">Your Success is Our Priority</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine cutting-edge technology with decades of real estate expertise 
              to deliver exceptional investment opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-8 rounded-xl bg-card border shadow-card hover:shadow-hover transition-smooth">
                  <div className="w-16 h-16 mx-auto mb-6 gradient-primary rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary">Featured Properties</Badge>
            <h2 className="text-4xl font-bold mb-6">Premium Investment Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Handpicked properties with verified returns and growth potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
              View All Properties
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Join our exclusive investor network and get access to pre-market deals, 
            expert analysis, and guaranteed returns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg">
              Become an Investor
              <CheckCircle className="ml-2 w-5 h-5" />
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

export default Home;