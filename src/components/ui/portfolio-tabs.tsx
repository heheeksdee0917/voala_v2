import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Grid, Building2, Home } from "lucide-react";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Maximize2 } from 'lucide-react';
import { projectsData, Project } from '../../data/projectsData';

type TabType = 'all' | 'commercial' | 'residential';

interface PortfolioTabsProps {
  className?: string;
}

export function PortfolioTabs({ className }: PortfolioTabsProps) {
  const [activeTab, setActiveTab] = React.useState<TabType>('all');
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    // Special handling for Aria award-winning project
    if (projectId === 'aria-residence-award') {
      navigate(`/award-winning-projects/${projectId}`);
    } else {
      navigate(`/projects/${projectId}`);
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value as TabType);
  };

  const getFilteredProjects = (tabValue: string): Project[] => {
    if (tabValue === 'all') return projectsData;
    return projectsData.filter(project => project.type === tabValue);
  };

  const getProjectCount = (type: TabType): number => {
    if (type === 'all') return projectsData.length;
    return projectsData.filter(p => p.type === type).length;
  };

  const ProjectGrid = ({ projects, tabKey }: { projects: Project[]; tabKey: string }) => (
    <AnimatePresence mode="wait">
      <motion.div
        key={tabKey}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full"
      >
        {/* Responsive grid - 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={`${tabKey}-${project.id}`}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => handleProjectClick(project.id)}
            >
              {/* Project Image Container - Magazine style with no border radius */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Main Image with hover effects */}
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-75"
                  loading="lazy"
                />
                
                {/* Overlay - Only appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Project Details Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 lg:p-8 text-white translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <div className="space-y-2 md:space-y-4">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-white/80">
                      <span className="px-2 md:px-3 py-1 bg-white/20 backdrop-blur-sm text-xs font-medium uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-linik leading-tight">
                      {project.name}
                    </h3>
                    
                    <p className="text-white/90 text-sm md:text-base leading-relaxed line-clamp-3 hidden md:block">
                      <span dangerouslySetInnerHTML={{ __html: project.description }} />
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 pt-2 md:pt-4 border-t border-white/20">
                      <div className="flex items-center gap-2 text-xs md:text-sm text-white/80">
                        <MapPin size={12} className="md:w-4 md:h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm text-white/80">
                        <Calendar size={12} className="md:w-4 md:h-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs md:text-sm text-white/80">
                      <Maximize2 size={12} className="md:w-4 md:h-4" />
                      <span>{project.size}</span>
                    </div>
                  </div>
                </div>
                
                {/* Magazine-style corner indicator - hidden on mobile */}
                <div className="absolute top-4 md:top-6 right-4 md:right-6 w-8 md:w-12 h-8 md:h-12 bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 hidden md:flex">
                  <div className="w-4 md:w-6 h-4 md:h-6 border-2 border-white flex items-center justify-center">
                    <div className="w-1 md:w-2 h-1 md:h-2 bg-white"></div>
                  </div>
                </div>

                {/* Magazine-style bottom label */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-3 md:p-4 group-hover:translate-y-full group-hover:opacity-0 transition-all duration-500">
                  <h4 className="text-white font-bold text-base md:text-lg font-linik truncate">
                    {project.name}
                  </h4>
                  <p className="text-white/80 text-xs md:text-sm">
                    {project.location} • {project.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <div className={`w-full ${className}`}>
      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <ScrollArea>
          <TabsList className="mb-8 md:mb-12 h-auto -space-x-px bg-background p-0 shadow-sm shadow-black/5 rtl:space-x-reverse w-full justify-center">
            <TabsTrigger
              value="all"
              className="relative overflow-hidden border border-border py-3 md:py-4 px-4 md:px-8 font-linik font-semibold text-sm md:text-base after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:after:bg-black transition-all duration-300"
            >
              <Grid
                className="-ms-0.5 me-2 opacity-60"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
              <span className="hidden sm:inline">All</span>
              <span className="ml-1 md:ml-2 text-xs md:text-sm opacity-70">
                ({getProjectCount('all')})
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="commercial"
              className="relative overflow-hidden border border-border py-3 md:py-4 px-4 md:px-8 font-linik font-semibold text-sm md:text-base after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:after:bg-black transition-all duration-300"
            >
              <Building2
                className="-ms-0.5 me-2 opacity-60"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
              <span className="hidden sm:inline">Commercial</span>
              <span className="sm:hidden">Comm</span>
              <span className="ml-1 md:ml-2 text-xs md:text-sm opacity-70">
                ({getProjectCount('commercial')})
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="residential"
              className="relative overflow-hidden border border-border py-3 md:py-4 px-4 md:px-8 font-linik font-semibold text-sm md:text-base after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:after:bg-black transition-all duration-300"
            >
              <Home
                className="-ms-0.5 me-2 opacity-60"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
              <span className="hidden sm:inline">Residential</span>
              <span className="sm:hidden">Resi</span>
              <span className="ml-1 md:ml-2 text-xs md:text-sm opacity-70">
                ({getProjectCount('residential')})
              </span>
            </TabsTrigger>
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        
        <TabsContent value="all" className="mt-0">
          <ProjectGrid projects={getFilteredProjects('all')} tabKey="all" />
        </TabsContent>
        
        <TabsContent value="commercial" className="mt-0">
          <ProjectGrid projects={getFilteredProjects('commercial')} tabKey="commercial" />
        </TabsContent>
        
        <TabsContent value="residential" className="mt-0">
          <ProjectGrid projects={getFilteredProjects('residential')} tabKey="residential" />
        </TabsContent>
      </Tabs>
    </div>
  );
}