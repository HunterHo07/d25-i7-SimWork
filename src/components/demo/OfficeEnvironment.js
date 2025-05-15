'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import { roleTasks } from '@/data/demoTasks';

export default function OfficeEnvironment() {
  const [selectedStation, setSelectedStation] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [characterPosition, setCharacterPosition] = useState({ x: 50, y: 70 });
  const environmentRef = useRef(null);

  const stations = [
    { id: 'developer', name: 'Developer Station', x: 20, y: 30 },
    { id: 'designer', name: 'Design Lab', x: 80, y: 30 },
    { id: 'dataEntry', name: 'Data Entry', x: 20, y: 70 },
    { id: 'aiEngineer', name: 'AI Engineering', x: 80, y: 70 },
  ];

  const handleStationClick = (station) => {
    // Move character to station
    setCharacterPosition({ x: station.x, y: station.y });

    // After character arrives, show station details
    setTimeout(() => {
      setSelectedStation(station.id);
      setSelectedTask(null);
    }, 1000);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const closeStation = () => {
    setSelectedStation(null);
    setSelectedTask(null);
  };

  const closeTask = () => {
    setSelectedTask(null);
  };

  // Handle click on environment to move character
  const handleEnvironmentClick = (e) => {
    if (selectedStation || selectedTask) return;

    const rect = environmentRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setCharacterPosition({ x, y });
  };

  return (
    <div className="relative w-full h-[calc(100vh-80px)] bg-gray-900 overflow-hidden">
      {/* Office environment */}
      <div
        ref={environmentRef}
        className="relative w-full h-full cursor-pointer"
        onClick={handleEnvironmentClick}
      >
        <AppImage
          src="/images/office-environment.jpg"
          alt="Office Environment"
          fill
          className="object-cover opacity-40"
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-blue-950/30"></div>

        {/* Stations */}
        {stations.map((station) => (
          <div
            key={station.id}
            className="absolute w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
            style={{ left: `${station.x}%`, top: `${station.y}%` }}
            onClick={(e) => {
              e.stopPropagation();
              handleStationClick(station);
            }}
          >
            <div className="w-full h-full rounded-full bg-blue-500/30 backdrop-blur-sm border border-blue-400/50 flex items-center justify-center animate-pulse">
              <span className="text-white text-xs font-bold">{station.name}</span>
            </div>
          </div>
        ))}

        {/* Character */}
        <motion.div
          className="absolute w-8 h-8 bg-green-500 rounded-full border-2 border-white z-20 flex items-center justify-center"
          initial={{ x: 0, y: 0 }}
          animate={{
            left: `${characterPosition.x}%`,
            top: `${characterPosition.y}%`,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <span className="text-xs font-bold">You</span>
        </motion.div>

        {/* Instructions */}
        {!selectedStation && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-lg p-4 text-white text-center max-w-md">
            <p>Click on a station to interact with it, or click anywhere in the environment to move your character.</p>
          </div>
        )}
      </div>

      {/* Station panel */}
      {selectedStation && !selectedTask && (
        <motion.div
          className="absolute right-0 top-0 h-full w-full md:w-1/3 bg-black/80 backdrop-blur-md p-6 overflow-y-auto"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">
              {stations.find(s => s.id === selectedStation)?.name}
            </h2>
            <button
              onClick={closeStation}
              className="text-white/70 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p className="text-white/70 mb-6">
            Select a task to complete at this station:
          </p>

          <div className="space-y-4">
            {roleTasks[selectedStation === 'dataEntry' ? 'dataEntry' : selectedStation === 'aiEngineer' ? 'aiEngineer' : selectedStation]?.map((task) => (
              <div
                key={task.id}
                className="bg-white/10 rounded-lg p-4 cursor-pointer hover:bg-white/20 transition-colors"
                onClick={() => handleTaskClick(task)}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{task.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    task.difficulty === 'Easy' ? 'bg-green-500/20 text-green-300' :
                    task.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {task.difficulty}
                  </span>
                </div>
                <p className="text-white/70 text-sm mb-2">{task.description}</p>
                <div className="flex justify-between items-center text-xs text-white/50">
                  <span>Est. time: {task.timeEstimate}</span>
                  <span>Skills: {task.skills.slice(0, 2).join(', ')}{task.skills.length > 2 ? '...' : ''}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Task panel */}
      {selectedTask && (
        <motion.div
          className="absolute inset-0 bg-black/90 backdrop-blur-md p-6 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={closeTask}
                className="text-white/70 hover:text-white flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to tasks
              </button>

              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedTask.difficulty === 'Easy' ? 'bg-green-500/20 text-green-300' :
                selectedTask.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                'bg-red-500/20 text-red-300'
              }`}>
                {selectedTask.difficulty}
              </span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">{selectedTask.title}</h2>
            <p className="text-white/70 mb-6">{selectedTask.description}</p>

            <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Task Details</h3>

              <div className="space-y-4">
                <div>
                  <div className="text-white/50 mb-1">Estimated Time:</div>
                  <div>{selectedTask.timeEstimate}</div>
                </div>

                <div>
                  <div className="text-white/50 mb-1">Required Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedTask.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedTask.codeSnippet && (
                  <div>
                    <div className="text-white/50 mb-1">Code Snippet:</div>
                    <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{selectedTask.codeSnippet}</code>
                    </pre>
                  </div>
                )}

                {selectedTask.currentDesign && (
                  <div>
                    <div className="text-white/50 mb-1">Current Design:</div>
                    <div className="bg-gray-900 p-4 rounded-lg">
                      <div
                        className="p-4 rounded text-center"
                        style={{
                          backgroundColor: selectedTask.currentDesign.backgroundColor,
                          color: selectedTask.currentDesign.textColor,
                          borderRadius: selectedTask.currentDesign.borderRadius,
                          padding: selectedTask.currentDesign.padding,
                        }}
                      >
                        Example Button
                      </div>
                    </div>
                  </div>
                )}

                {selectedTask.forms && (
                  <div>
                    <div className="text-white/50 mb-1">Customer Forms:</div>
                    <div className="space-y-2">
                      {selectedTask.forms.map((form, index) => (
                        <div key={index} className="bg-gray-900 p-3 rounded-lg text-sm">
                          <div><strong>Name:</strong> {form.customerName}</div>
                          <div><strong>Email:</strong> {form.email}</div>
                          <div><strong>Phone:</strong> {form.phone}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
                Submit Solution
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
