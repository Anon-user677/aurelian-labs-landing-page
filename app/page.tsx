"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Environment } from "@react-three/drei"
import type * as THREE from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

function ObsidianWaves() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  return (
    <>
      <mesh ref={meshRef} position={[0, -2, -5]} rotation={[-Math.PI / 6, 0, 0]}>
        <planeGeometry args={[20, 20, 32, 32]} />
        <meshStandardMaterial color="#0D0D0D" metalness={0.9} roughness={0.1} envMapIntensity={1} />
      </mesh>
      <mesh position={[3, -1.5, -3]} rotation={[-Math.PI / 4, 0.2, 0]}>
        <planeGeometry args={[15, 15, 24, 24]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} envMapIntensity={0.8} />
      </mesh>
      <mesh position={[-2, -2.2, -4]} rotation={[-Math.PI / 5, -0.1, 0]}>
        <planeGeometry args={[18, 18, 28, 28]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.95} roughness={0.05} envMapIntensity={1.2} />
      </mesh>
    </>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 5]} intensity={0.5} />
            <pointLight position={[-10, -10, -5]} intensity={0.3} color="#c8a951" />
            <ObsidianWaves />
            <Environment preset="night" />
          </Suspense>
        </Canvas>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 bg-background/80 backdrop-blur-sm">
        {/* Header */}
        <header className="border-b border-border/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/images/brand-icon.png"
                alt="Aurelian Labs Brand Icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-semibold text-primary">Aurelian Labs</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Contact
              </Button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-24 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-12 flex justify-center">
              <Image
                src="/images/wordmark-logo-new.png"
                alt="Aurelian Labs"
                width={800}
                height={240}
                className="w-auto h-56 md:h-72"
                priority
              />
            </div>

            <h1 className="text-xl md:text-3xl font-bold text-primary mb-8 text-balance italic">
              Engineering the financial infrastructure of the next era with precision and permanence
            </h1>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-secondary/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Vision ― Discipline ― Execution</h2>
            <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
              Seamlessly integrating the trust of established financial systems with the power of advanced fintech
              innovation.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card border-border/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-primary rounded-sm"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Institutional Grade</h3>
                  <p className="text-foreground/80">
                    Foundationally built to advance standards of compliance and security.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-primary rounded-sm"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Next-Gen Technology</h3>
                  <p className="text-foreground/80">
                    Leveraging DeFi and AI capabilities and proprietary advancements for innovative implementations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-primary rounded-sm"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Permanent Solutions</h3>
                  <p className="text-foreground/80">
                    Designed for longevity with AI-native architecture built to scale and adapt.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/20 py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-3">
                <Image src="/images/brand-icon.png" alt="Aurelian Labs" width={32} height={32} className="w-8 h-8" />
                <span className="text-lg font-semibold text-primary">Aurelian Labs</span>
              </div>

              <div className="text-center md:text-right text-sm text-foreground/70 space-y-1">
                <p>All rights reserved by Aurelian Labs Inc.</p>
                <p>
                  <a href="mailto:contact@aurelianlabs.ai" className="text-primary hover:underline">
                    contact@aurelianlabs.ai
                  </a>
                </p>
                <p>8 The Green, Suite B, Dover, DE, United States 19901</p>
                <p className="text-xs mt-2">
                  Aurelian Labs Inc. does not advise on the investment, sale, or transaction of any securities.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
