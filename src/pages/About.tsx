import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { chefs } from "@/data/menuData";
import { Award, Clock, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About MEC Canteen</h1>
          <p className="text-lg text-muted-foreground">
            Serving the MEC community with passion, quality, and dedication since our inception.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-hero-gradient p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide nutritious, delicious, and affordable meals to students and staff, 
                    creating a welcoming space that feels like home away from home.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-lg">
                  <Award className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Our Values</h3>
                  <p className="text-muted-foreground">
                    Quality ingredients, hygienic preparation, timely service, and customer satisfaction 
                    are at the heart of everything we do.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="bg-muted/50 rounded-xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">65+</div>
              <p className="text-muted-foreground">Menu Items</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">7</div>
              <p className="text-muted-foreground">Expert Chefs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <p className="text-muted-foreground">Daily Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Fresh Food</p>
            </div>
          </div>
        </div>

        {/* Chefs Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Expert Chefs</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {chefs.map((chef, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <p className="font-semibold text-sm">{chef}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* College Info */}
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">MEC College Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Model Engineering College<br />
                  Thrikkakara, Kochi<br />
                  Kerala, India - 682021
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Operating Hours
                </h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 7:30 AM - 7:00 PM<br />
                  Saturday: 8:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
