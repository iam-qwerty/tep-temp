"use client"
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Linkedin, Instagram, ExternalLink } from "lucide-react";
import type { Advisor, Leader } from "@/types";

interface BioModalProps {
  isOpen: boolean;
  onClose: () => void;
  person: Advisor | Leader | null;
  type: 'advisor' | 'leader';
}

export default function BioModal({ isOpen, onClose, person, type }: BioModalProps) {
  if (!isOpen || !person) return null;

  const isAdvisor = type === 'advisor' && 'expertise' in person;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white dark:bg-gray-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover rounded-full border-2 border-primary/20"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{person.name}</h2>
              <p className="text-primary font-medium">{person.role}</p>
              {'organization' in person && person.organization && (
                <p className="text-sm text-muted-foreground">{person.organization}</p>
              )}
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Bio */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About</h3>
            <p className="text-muted-foreground leading-relaxed">{person.bio}</p>
          </div>

          {/* Expertise (for advisors only) */}
          {isAdvisor && person.expertise && person.expertise.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {person.expertise.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Social Links */}
          <div className="flex gap-3 pt-4 border-t">
            {person.linkedin && (
              <Button variant="outline" size="sm" asChild>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </Button>
            )}
            {person.instagram && (
              <Button variant="outline" size="sm" asChild>
                <a href={person.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagram
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}