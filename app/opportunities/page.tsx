import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

interface Opportunity {
    title: string
    description: string
    commitment: string
    type: string
}

// const OpportunityCard = ({ opportunity }: { opportunity: Opportunity }) => (
//     <Card className="p-6 hover:shadow-lg transition-shadow">
//         <div className="flex justify-between items-start gap-4">
//             <div className="space-y-1">
//                 <h3 className="text-xl font-semibold">{opportunity.title}</h3>
//                 <p className="text-sm text-secondary">{opportunity.type} • {opportunity.commitment}</p>
//                 <p className="text-muted-foreground text-sm">{opportunity.description}</p>
//             </div>
//             <Button variant="default" asChild className="shrink-0">
//                 <Link href="/contact">Apply Now</Link>
//             </Button>
//         </div>
//     </Card>
// )

const opportunities: Opportunity[] = [
    {
        title: 'Volunteer Mentor',
        description: 'Guide and support youth in their personal and professional development journey. Share your experience and expertise to help shape future leaders.',
        commitment: '4-6 hours/week',
        type: 'Volunteer'
    },
    {
        title: 'Program Coordinator',
        description: 'Help organize and coordinate our various initiatives. Work directly with our team to ensure smooth execution of programs and events.',
        commitment: 'Full-time',
        type: 'Employment'
    },
    {
        title: 'Community Outreach Ambassador',
        description: 'Represent TEP in community events and help build strong relationships with local organizations and stakeholders.',
        commitment: 'Flexible',
        type: 'Volunteer'
    },
    {
        title: 'Youth Development Specialist',
        description: 'Work directly with young people to implement transformative programs and provide guidance in their personal growth journey.',
        commitment: 'Full-time',
        type: 'Employment'
    }
]

export default function OpportunitiesPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-4">Join Our Mission</h1>
                <p className="text-lg text-muted-foreground text-center mb-12">
                    Discover meaningful opportunities to make a difference in your community and help transform lives across Nigeria.
                </p>

                <div className="grid gap-6">
                    {opportunities.map((opportunity, index) => (
                        <Card key={index} className="p-6">
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-semibold">{opportunity.title}</h3>
                                        <p className="text-sm text-secondary mt-1">
                                            {opportunity.type} • {opportunity.commitment}
                                        </p>
                                    </div>
                                    <Button variant="default">
                                        <Link href="/contact">
                                            Apply Now
                                        </Link>
                                    </Button>
                                </div>
                                <p className="text-muted-foreground">{opportunity.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-muted-foreground mb-6">
                        Don&apos;t see a role that fits? We&apos;re always looking for passionate individuals to join our team.
                    </p>
                    <Button size="lg">
                        Contact Us
                    </Button>
                </div>
            </div>
        </div>
    )
}
