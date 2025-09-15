"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PaintBucket, Sparkles, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        message: "",
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate form submission
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 3000)
    }

    return (
        <div className="min-h-screen via-card to-muted/30 flex items-center justify-center p-4 mt-16">
            <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
                {/* Left side - Branding and info */}
                <div className="space-y-8 text-center lg:text-left">
                    <div className="space-y-4">
                        <div className="flex items-center justify-center lg:justify-start">
                            <Image src="/logo.jpg" alt="Acme Paints Logo" width={40} height={40} />
                            <h1 className="text-4xl font-heading font-bold text-foreground"><span className="text-[#fd1717]">Acme</span>Paints</h1>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-balance">
                            Transform Your Space with Expert Color Consultation
                        </h2>
                        <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                            Get personalized paint recommendations from our color experts. We'll help you choose the perfect palette
                            for your home or business.
                        </p>
                    </div>

                    <div className="grid gap-4 max-w-md mx-auto lg:mx-0">
                        <div className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">Free color consultation</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">Expert paint recommendations</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">Professional color matching</span>
                        </div>
                    </div>
                </div>

                {/* Right side - Form */}
                <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-card/80 backdrop-blur-sm">
                    <CardHeader className="text-center space-y-2">
                        <CardTitle className="text-2xl font-heading font-bold">Get Your Free Consultation</CardTitle>
                        <CardDescription className="text-base">
                            Fill out the form below and our experts will contact you within 24 hours
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-sm font-medium">
                                        Full Name
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Your full name"
                                        value={formData.fullname}
                                        onChange={handleInputChange}
                                        required
                                        className="h-12 bg-input border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="h-12 bg-input border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="mobile" className="text-sm font-medium">
                                    Mobile Number *
                                </Label>
                                <Input
                                    id="mobile"
                                    name="mobile"
                                    type="tel"
                                    placeholder="Phone (optional)"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="h-12 bg-input border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-sm font-medium">
                                    Project Details
                                </Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your message..."
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="bg-input border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base transition-all duration-200 shadow-lg hover:shadow-xl"
                                disabled={isSubmitted}
                            >
                                {isSubmitted ? (
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5" />
                                        Request Submitted!
                                    </div>
                                ) : (
                                    "Get Free Consultation"
                                )}
                            </Button>

                            <p className="text-xs text-muted-foreground text-center leading-relaxed">
                                By submitting this form, you agree to receive consultation calls from Acme Paints. We respect your
                                privacy and won't share your information.
                            </p>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
