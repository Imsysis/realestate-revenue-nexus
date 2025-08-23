import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PropertyCard from '@/components/PropertyCard';
import { Search, Filter, MapPin } from 'lucide-react';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const properties = [
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
      status: 'available' as const,
    },
    {
      id: '2',
      title: 'Downtown Apartment Complex',
      location: 'Manhattan, NY',
      price: '$1,850,000',
      image: property2,
      type: 'investment' as const,
      roi: '8.5%',
      status: 'available' as const,
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
      status: 'available' as const,
    },
    {
      id: '4',
      title: 'Urban Loft Complex',
      location: 'Brooklyn, NY',
      price: '$950,000',
      image: property1,
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 1800,
      type: 'investment' as const,
      roi: '12.3%',
      status: 'pending' as const,
    },
    {
      id: '5',
      title: 'Suburban Family Home',
      location: 'Austin, TX',
      price: '$685,000',
      image: property2,
      bedrooms: 5,
      bathrooms: 3,
      squareFeet: 2900,
      type: 'sale' as const,
      status: 'available' as const,
    },
    {
      id: '6',
      title: 'Beach Resort Development',
      location: 'San Diego, CA',
      price: '$4,200,000',
      image: property3,
      bedrooms: 6,
      bathrooms: 5,
      squareFeet: 4200,
      type: 'off-plan' as const,
      status: 'available' as const,
    },
  ];

  const featuredProperties = properties.slice(0, 3);
  const regularProperties = properties.slice(3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <Badge className="mb-6 bg-accent text-accent-foreground">Properties</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Your Next
            <span className="block">Investment Opportunity</span>
          </h1>
          <p className="text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
            Browse our curated selection of premium properties, from luxury homes 
            to high-yield investment opportunities and exclusive off-plan developments.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card p-6 rounded-xl border shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by location or property name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Property Type */}
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger>
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="sale">For Sale</SelectItem>
                  <SelectItem value="investment">Investment</SelectItem>
                  <SelectItem value="off-plan">Off-Plan</SelectItem>
                </SelectContent>
              </Select>

              {/* Price Range */}
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-1m">Under $1M</SelectItem>
                  <SelectItem value="1m-3m">$1M - $3M</SelectItem>
                  <SelectItem value="over-3m">Over $3M</SelectItem>
                </SelectContent>
              </Select>

              {/* Filter Button */}
              <Button className="gradient-primary">
                <Filter className="w-4 h-4 mr-2" />
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent">Featured Properties</Badge>
            <h2 className="text-4xl font-bold mb-6">Premium Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hand-selected properties with exceptional investment potential and proven returns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* All Properties */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">All Properties</Badge>
            <h2 className="text-4xl font-bold mb-6">Complete Property Listings</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive collection of investment-grade properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {regularProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center space-x-2">
            <Button variant="outline" disabled>Previous</Button>
            <Button variant="default" className="bg-primary">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Our expert team can help you find the perfect investment opportunity 
            tailored to your specific needs and budget.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg">
            <MapPin className="w-5 h-5 mr-2" />
            Request Custom Search
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Properties;