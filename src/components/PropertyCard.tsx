import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, TrendingUp } from 'lucide-react';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  bedrooms?: number;
  bathrooms?: number;
  squareFeet?: number;
  type: 'sale' | 'investment' | 'off-plan';
  roi?: string;
  status?: 'available' | 'sold' | 'pending';
}

const PropertyCard = ({
  title,
  location,
  price,
  image,
  bedrooms,
  bathrooms,
  squareFeet,
  type,
  roi,
  status = 'available'
}: PropertyCardProps) => {
  const getTypeColor = () => {
    switch (type) {
      case 'investment':
        return 'bg-secondary text-secondary-foreground';
      case 'off-plan':
        return 'bg-accent text-accent-foreground';
      default:
        return 'bg-primary text-primary-foreground';
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'sold':
        return 'bg-destructive text-destructive-foreground';
      case 'pending':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="property-card group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex space-x-2">
          <Badge className={getTypeColor()}>
            {type === 'off-plan' ? 'Off-Plan' : type.charAt(0).toUpperCase() + type.slice(1)}
          </Badge>
          <Badge className={getStatusColor()}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
        {roi && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-accent text-accent-foreground">
              <TrendingUp className="w-3 h-3 mr-1" />
              {roi} ROI
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
            {title}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
        </div>

        {/* Property Details */}
        {(bedrooms || bathrooms || squareFeet) && (
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            {bedrooms && (
              <div className="flex items-center">
                <Bed className="w-4 h-4 mr-1" />
                {bedrooms} bed
              </div>
            )}
            {bathrooms && (
              <div className="flex items-center">
                <Bath className="w-4 h-4 mr-1" />
                {bathrooms} bath
              </div>
            )}
            {squareFeet && (
              <div className="flex items-center">
                <Square className="w-4 h-4 mr-1" />
                {squareFeet.toLocaleString()} sqft
              </div>
            )}
          </div>
        )}

        {/* Price and Action */}
        <div className="flex justify-between items-center pt-4 border-t">
          <div className="text-2xl font-bold text-primary">
            {price}
          </div>
          <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
            Inquire Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;