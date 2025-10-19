'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projectsData, projectTags, Project } from '@/data/projectsData'

const ProjectCard = ({ project }: { project: Project }) => {
  const baseClasses =
    'block bg-white rounded-2xl shadow-md overflow-hidden border transition-all duration-300 border border-gray-300'

  const hoverClasses = project.link
    ? 'hover:shadow-xl hover:-translate-y-1'
    : ''

  const CardContent = (
    <>
      <div className="relative w-full h-125 bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400 text-sm">{project.title}</span>
        <Image
          src={project.imageUrl}
          alt={`${project.title}`}
          layout="fill"
          objectFit="cover"
          className="object-top"
        />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm h-12 overflow-hidden text-ellipsis">
          {project.description}
        </p>
      </div>
    </>
  )

  return project.link ? (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${hoverClasses}`}
    >
      {CardContent}
    </Link>
  ) : (
    <div className={`${baseClasses} ${hoverClasses}`}>{CardContent}</div>
  )
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = projectsData.filter(
    (project) => activeFilter === 'All' || project.tags.includes(activeFilter)
  )

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">My Projects</h1>
        <p className="text-gray-500 mt-2">
          <br />
          직접 참여하고 만들어온 프로젝트들입니다.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {projectTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
              activeFilter === tag
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
