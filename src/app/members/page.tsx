"use client";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React from "react";

export default function MembersPage() {
    const members = [
        {
            id: 1,
            name: "Sarah Johnson",
            age: 28,
            location: "New York, NY",
            image: "https://i.pravatar.cc/150?img=1",
        },
        {
            id: 2,
            name: "Michael Chen",
            age: 32,
            location: "San Francisco, CA",
            image: "https://i.pravatar.cc/150?img=2",
        },
        {
            id: 3,
            name: "Emma Wilson",
            age: 26,
            location: "Chicago, IL",
            image: "https://i.pravatar.cc/150?img=3",
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8 text-center">
                Browse Matches
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {members.map((member) => (
                    <Card key={member.id} className="max-w-[300px] mx-auto">
                        <CardBody className="p-0">
                            <Image
                                src={member.image}
                                alt={member.name}
                                className="w-full h-[200px] object-cover"
                            />
                        </CardBody>
                        <CardFooter className="flex flex-col items-start">
                            <h2 className="text-xl font-semibold">
                                {member.name}
                            </h2>
                            <p className="text-gray-600">
                                {member.age} • {member.location}
                            </p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
