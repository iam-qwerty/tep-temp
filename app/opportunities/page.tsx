"use client"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import { 
  Users, 
  Calendar, 
  Briefcase, 
  MapPin, 
  Clock, 
  Star, 
  Award,
  Lightbulb,
} from 'lucide-react'

interface Vacancy {
  id: string
  title: string
  department: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract'
  salary: string
  description: string
  requirements: string[]
  deadline: string
  urgent?: boolean
}

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  type: 'Workshop' | 'Conference' | 'Networking' | 'Training'
  description: string
  capacity: number
  registered: number
  featured?: boolean
}

// interface VolunteerOpportunity {
//   id: string
//   title: string
//   category: string
//   commitment: string
//   impact: string
//   description: string
//   skills: string[]
//   icon: React.ReactNode
// }

const vacancies: Vacancy[] = [
  // {
  //   id: '1',
  //   title: 'Youth Development Coordinator',
  //   department: 'Programmes',
  //   location: 'Lagos, Nigeria',
  //   type: 'Full-time',
  //   salary: '₦150,000 - ₦250,000/month',
  //   description: 'Lead youth development programmes and coordinate community outreach initiatives across Lagos.',
  //   requirements: ['Bachelor\'s degree in Social Sciences', '3+ years experience', 'Leadership skills'],
  //   deadline: '2024-02-15',
  //   urgent: true
  // },
]

const events: Event[] = [
  {
    id: '1',
    title: 'Youth Leadership Summit 2024',
    date: '2024-03-15',
    time: '9:00 AM - 5:00 PM',
    location: 'Lagos Convention Center',
    type: 'Conference',
    description: 'A premier gathering of young leaders, entrepreneurs, and change-makers from across Nigeria.',
    capacity: 500,
    registered: 387,
    featured: true
  },
  {
    id: '2',
    title: 'Community Building Workshop',
    date: '2024-02-28',
    time: '2:00 PM - 6:00 PM',
    location: 'TEP Community Center, Abuja',
    type: 'Workshop',
    description: 'Learn practical skills for community engagement and sustainable development.',
    capacity: 50,
    registered: 23
  },
  {
    id: '3',
    title: 'Mentorship Networking Event',
    date: '2024-03-08',
    time: '6:00 PM - 9:00 PM',
    location: 'Virtual Event',
    type: 'Networking',
    description: 'Connect with mentors and mentees in our interactive virtual networking session.',
    capacity: 200,
    registered: 145
  }
]

// const volunteerOpportunities: VolunteerOpportunity[] = [
//   {
//     id: '1',
//     title: 'Youth Mentor',
//     category: 'Education',
//     commitment: '4-6 hours/week',
//     impact: 'Guide 2-3 youth through their development journey',
//     description: 'Share your experience and expertise to help shape future leaders.',
//     skills: ['Mentoring', 'Communication', 'Leadership'],
//     icon: <Users className="w-6 h-6" />
//   },
//   {
//     id: '2',
//     title: 'Event Coordinator',
//     category: 'Operations',
//     commitment: 'Flexible',
//     impact: 'Support organization of community events and workshops',
//     description: 'Help organize and coordinate our various initiatives and community events.',
//     skills: ['Organization', 'Event Planning', 'Teamwork'],
//     icon: <Calendar className="w-6 h-6" />
//   },
//   {
//     id: '3',
//     title: 'Content Creator',
//     category: 'Marketing',
//     commitment: '2-4 hours/week',
//     impact: 'Create content that reaches 10,000+ people monthly',
//     description: 'Create engaging content for our social media and digital platforms.',
//     skills: ['Writing', 'Design', 'Social Media'],
//     icon: <Lightbulb className="w-6 h-6" />
//   }
// ]

// const VacancyCard = ({ vacancy }: { vacancy: Vacancy }) => (
//   <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary group">
//     <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
//       <div className="flex-1">
//         <div className="flex items-start justify-between mb-3">
//           <div className="flex items-center gap-3">
//             <Briefcase className="w-8 h-8 text-primary" />
//             <div>
//               <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
//                 {vacancy.title}
//               </h3>
//               <p className="text-sm text-muted-foreground">{vacancy.department}</p>
//             </div>
//           </div>
//           {vacancy.urgent && (
//             <Badge variant="destructive" className="animate-pulse">
//               Urgent
//             </Badge>
//           )}
//         </div>
        
//         <div className="flex flex-wrap gap-2 mb-4">
//           <Badge variant="secondary" className="flex items-center gap-1">
//             <MapPin className="w-3 h-3" />
//             {vacancy.location}
//           </Badge>
//           <Badge variant="outline">{vacancy.type}</Badge>
//           <Badge variant="outline" className="text-green-600">
//             {vacancy.salary}
//           </Badge>
//         </div>
        
//         <p className="text-muted-foreground mb-4">{vacancy.description}</p>
        
//         <div className="mb-4">
//           <h4 className="font-semibold mb-2">Requirements:</h4>
//           <ul className="text-sm text-muted-foreground space-y-1">
//             {vacancy.requirements.map((req, index) => (
//               <li key={index} className="flex items-center gap-2">
//                 <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
//                 {req}
//               </li>
//             ))}
//           </ul>
//         </div>
        
//         <div className="flex items-center gap-2 text-sm text-muted-foreground">
//           <Clock className="w-4 h-4" />
//           <span>Deadline: {new Date(vacancy.deadline).toLocaleDateString()}</span>
//         </div>
//       </div>
      
//       <div className="lg:text-right">
//         <Button asChild className="w-full lg:w-auto">
//           <Link href="/contact">Apply Now</Link>
//         </Button>
//       </div>
//     </div>
//   </Card>
// )

const EventCard = ({ event }: { event: Event }) => (
  <Card className="p-6 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
    {event.featured && (
      <div className="absolute top-4 right-4">
        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
          <Star className="w-3 h-3 mr-1" />
          Featured
        </Badge>
      </div>
    )}
    
    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <Calendar className="w-8 h-8 text-primary" />
          <div>
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
              {event.title}
            </h3>
            <Badge variant="outline" className="mt-1">{event.type}</Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-4">{event.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="text-sm">
            {/* <span className="font-semibold">{event.registered}</span> */}
            {/* <span className="text-muted-foreground"> / {event.capacity} registered</span> */}
          </div>
          <div className="w-32 bg-muted rounded-full h-2">
            {/* <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(event.registered / event.capacity) * 100}%` }}
            ></div> */}
          </div>
        </div>
      </div>
      
      <div className="lg:text-right">
        <Button 
          asChild 
          variant={event.registered >= event.capacity ? "secondary" : "default"}
          disabled={event.registered >= event.capacity}
          className="w-full lg:w-auto"
        >
          <Link href="/contact">
            {event.registered >= event.capacity ? 'Full' : 'Register'}
          </Link>
        </Button>
      </div>
    </div>
  </Card>
)

// const VolunteerCard = ({ opportunity }: { opportunity: VolunteerOpportunity }) => (
//   <Card className="p-6 hover:shadow-xl transition-all duration-300 group hover:border-primary/50">
//     <div className="flex items-start gap-4">
//       <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
//         {opportunity.icon}
//       </div>
      
//       <div className="flex-1">
//         <div className="flex items-start justify-between mb-2">
//           <div>
//             <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
//               {opportunity.title}
//             </h3>
//             <Badge variant="secondary" className="mt-1">{opportunity.category}</Badge>
//           </div>
//           <div className="text-right">
//             <p className="text-sm text-muted-foreground">{opportunity.commitment}</p>
//           </div>
//         </div>
        
//         <div className="flex items-center gap-2 mb-3">
//           <Target className="w-4 h-4 text-green-600" />
//           <span className="text-sm font-medium text-green-600">{opportunity.impact}</span>
//         </div>
        
//         <p className="text-muted-foreground mb-4">{opportunity.description}</p>
        
//         <div className="flex flex-wrap gap-2 mb-4">
//           {opportunity.skills.map((skill, index) => (
//             <Badge key={index} variant="outline" className="text-xs">
//               {skill}
//             </Badge>
//           ))}
//         </div>
        
//         <Button asChild size="sm">
//           <Link href="/contact">Get Involved</Link>
//         </Button>
//       </div>
//     </div>
//   </Card>
// )

export default function OpportunitiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">          
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Shape Tomorrow&apos;s Leaders
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover meaningful opportunities to make a difference in your community and help transform lives across Nigeria through vacancies, events, and volunteer roles.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span>Impact-driven opportunities</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>Supportive community</span>
            </div>
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-primary" />
              <span>Continuous learning</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="vacancies" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="vacancies" className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Vacancies
                {vacancies.length > 0 && (<Badge variant="secondary" className="ml-2">{vacancies.length}</Badge>)}
              </TabsTrigger>
              <TabsTrigger value="events" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Events
                <Badge variant="secondary" className="ml-2">{events.length}</Badge>
              </TabsTrigger>
              {/* <TabsTrigger value="volunteer" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Volunteer
                <Badge variant="secondary" className="ml-2">{volunteerOpportunities.length}</Badge>
              </TabsTrigger> */}
            </TabsList>

            <TabsContent value="vacancies" className="space-y-6">
              <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center">
                <p className="font-bold">There are currently no vacancies</p>
              </div>
              {/* <div className="grid gap-6">
                {vacancies.map((vacancy) => (
                  <VacancyCard key={vacancy.id} vacancy={vacancy} />
                ))}
              </div> */}
            </TabsContent>

            <TabsContent value="events" className="space-y-6">
              <div className="grid gap-6">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </TabsContent>

            {/* <TabsContent value="volunteer" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {volunteerOpportunities.map((opportunity) => (
                  <VolunteerCard key={opportunity.id} opportunity={opportunity} />
                ))}
              </div>
            </TabsContent> */}
          </Tabs>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Don&apos;t See What You&apos;re Looking For?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for passionate individuals to join our mission. 
              If you don&apos;t see a role that fits your skills and interests, we&apos;d still love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Users className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}