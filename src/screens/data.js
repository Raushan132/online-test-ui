export const data=[
  {
      "questionTxt": "What is an operating system?",
    "optionA": "interface between the hardware and application programs",
    "optionB": "collection of programs that manages hardware resources",
    "optionC": "system service provider to the application programs",
    "optionD": "all of the mentioned",
    "optionE": "",
    "correctOption": "D",
    "marks": 1,
    "explanation": "The operating system acts as an interface between hardware and application programs, manages hardware resources, and provides services."
  },
  {
      "questionTxt": "What is the main function of the command interpreter?",
    "optionA": "to provide the interface between the API and application program",
    "optionB": "to handle the files in the operating system",
    "optionC": "to get and execute the next user-specified command",
    "optionD": "none of the mentioned",
    "optionE": "",
    "correctOption": "C",
    "marks": 1,
    "explanation": "The command interpreter reads and executes the next user-specified command."
  },
  {
      "questionTxt": "In Operating Systems, which of the following is/are CPU scheduling algorithms?",
    "optionA": "Priority",
    "optionB": "Round Robin",
    "optionC": "Shortest Job First",
    "optionD": "All of the mentioned",
    "optionE": "",
    "correctOption": "D",
    "marks": 1,
    "explanation": "Priority, Round Robin, and Shortest Job First are all CPU scheduling algorithms."
  },
  {
      "questionTxt": "To access the services of the operating system, the interface is provided by the ___",
    "optionA": "Library",
    "optionB": "System Calls",
    "optionC": "Assembly instructions",
    "optionD": "API",
    "optionE": "",
    "correctOption": "B",
    "marks": 1,
    "explanation": "System calls provide the interface between the application and the operating system services."
  },
  {
      "questionTxt": "CPU scheduling is the basis of",
    "optionA": "multiprogramming operating systems",
    "optionB": "larger memory sized systems",
    "optionC": "multiprocessor systems",
    "optionD": "none of the mentioned",
    "optionE": "",
    "correctOption": "A",
    "marks": 1,
    "explanation": "CPU scheduling is the basis of multiprogramming operating systems."
  },
  {
      "questionTxt": "Which one of the following is not true?",
    "optionA": "kernel remains in the memory during the entire computer session",
    "optionB": "kernel is made of various modules which can not be loaded in running operating system",
    "optionC": "kernel is the first part of the operating system to load into memory during booting",
    "optionD": "kernel is the program that constitutes the central core of the operating system",
    "optionE": "",
    "correctOption": "B",
    "marks": 1,
    "explanation": "Modern kernels can load modules dynamically; the statement that they cannot is incorrect."
  },
  {
      "questionTxt": "Which one of the following errors will be handle by the operating system?",
    "optionA": "lack of paper in printer",
    "optionB": "connection failure in the network",
    "optionC": "power failure",
    "optionD": "all of the mentioned",
    "optionE": "",
    "correctOption": "D",
    "marks": 1,
    "explanation": "The OS handles hardware and software errors like paper shortage, network failure, and power failure."
  },
  {
      "questionTxt": "Where is the operating system placed in the memory?",
    "optionA": "either low or high memory (depending on the location of interrupt vector)",
    "optionB": "in the low memory",
    "optionC": "in the high memory",
    "optionD": "none of the mentioned",
    "optionE": "",
    "correctOption": "A",
    "marks": 1,
    "explanation": "OS may be loaded into low or high memory depending on interrupt vector location."
  },
  {
      "questionTxt": "If a process fails, most operating system write the error informationtoa___",
    "optionA": "new file",
    "optionB": "another running process",
    "optionC": "log file",
    "optionD": "none of the mentioned",
    "optionE": "",
    "correctOption": "C",
    "marks": 1,
    "explanation": "Error logs are usually written into a log file for debugging and auditing."
  },
  {
  
    "questionTxt": "What does OS X has?",
    "optionA": "monolithic kernel with modules",
    "optionB": "microkernel",
    "optionC": "monolithic kernel",
    "optionD": "hybrid kernel",
    "optionE": "",
    "correctOption": "D",
    "marks": 1,
    "explanation": "OS X uses a hybrid kernel combining monolithic and microkernel designs."
  },
  {
  
    "questionTxt": "In operating system, each process has its own",
    "optionA": "open files",
    "optionB": "pending alarms, signals, and signal handlers",
    "optionC": "address space and global variables",
    "optionD": "all of the mentioned",
    "optionE": "",
    "correctOption": "D",
    "marks": 1,
    "explanation": "Each process has its own address space, global variables, files, alarms, and signal handlers."
  },
  {
  
    "questionTxt": "In a timeshare operating system, when the time slot assigned to a process is completed, the process switches from the current state to?",
    "optionA": "Suspended state",
    "optionB": "Terminated state",
    "optionC": "Ready state",
    "optionD": "Blocked state",
    "optionE": "",
    "correctOption": "C",
    "marks": 1,
    "explanation": "After time slot completion, the process moves to the Ready state."
  },
  {
  
    "questionTxt": "Cascading termination refers to the termination of all child processes if the parent process terminates",
    "optionA": "Normally or abnormally",
    "optionB": "Abnormally",
    "optionC": "Normally",
    "optionD": "None of the mentioned",
    "optionE": "",
    "correctOption": "A",
    "marks": 1,
    "explanation": "Cascading termination happens normally or abnormally when a parent process terminates."
  },
  {
  
    "questionTxt": "When a process is in a “Blocked” state waiting for some I/O service. When the service is completed, it goes to the a) Terminated state d) Ready state",
    "optionA": "",
    "optionB": "",
    "optionC": "",
    "optionD": "",
    "optionE": "",
    "correctOption": "D",
    "marks": 1,
    "explanation": "After I/O completion, a blocked process goes to the Ready state."
  },
  {
  
    "questionTxt": "Transient operating system code is a code that",
    "optionA": "stays in the memory always",
    "optionB": "never enters the memory space",
    "optionC": "comes and goes as needed",
    "optionD": "is not easily accessible",
    "optionE": "",
    "correctOption": "C",
    "marks": 1,
    "explanation": "Transient code is loaded into memory only when needed."
  },
  {
  
    "questionTxt": "The portion of the process scheduler in an operating system that dispatches processes is concerned with",
    "optionA": "assigning ready processes to waiting queue",
    "optionB": "assigning running processes to blocked queue",
    "optionC": "assigning ready processes to CPU",
    "optionD": "all of the mentioned",
    "optionE": "",
    "correctOption": "C",
    "marks": 1,
    "explanation": "The dispatcher assigns ready processes to the CPU."
  },
  {
  
    "questionTxt": "The FCFS algorithm is particularly troublesome for",
    "optionA": "operating systems",
    "optionB": "multiprocessor systems",
    "optionC": "time sharing systems",
    "optionD": "multiprogramming systems",
    "optionE": "",
    "correctOption": "C",
    "marks": 1,
    "explanation": "FCFS causes long waiting times in time-sharing systems."
  },
  {
  
    "questionTxt": "For an effective operating system, when to check for deadlock?",
    "optionA": "every time a resource request is made at fixed time intervals",
    "optionB": "at fixed time intervals",
    "optionC": "every time a resource request is made",
    "optionD": "none of the mentioned",
    "optionE": "",
    "correctOption": "C",
    "marks": 1,
    "explanation": "Deadlock checks should be done whenever a resource request is made."
  },
  {
  
    "questionTxt": "A deadlock avoidance algorithm dynamically examines the to ensure that a circular wait condition can never exist.",
    "optionA": "operating system",
    "optionB": "resources",
    "optionC": "system storage state",
    "optionD": "resource allocation state",
    "optionE": "",
    "correctOption": "D",
    "marks": 1,
    "explanation": "Deadlock avoidance checks the resource allocation state to prevent circular waits."
  },
  {
  
    "questionTxt": "Swapping ___ be done when a process has pending I/O, or has to execute I/O operations only into operating system buffers.",
    "optionA": "must never",
    "optionB": "maybe",
    "optionC": "can",
    "optionD": "must",
    "optionE": "",
    "correctOption": "A",
    "marks": 1,
    "explanation": "Swapping must never be done when a process has pending I/O to prevent data inconsistency."
  },
  {
  
    "questionTxt": "The main memory accommodates",
    "optionA": "cpu",
    "optionB": "user processes",
    "optionC": "operating system",
    "optionD": "all of the mentioned",
    "optionE": "",
    "correctOption": "D",
    "marks": 1,
    "explanation": "Main memory stores CPU, OS, and user processes."
  },
  {
  
    "questionTxt": "The operating system is responsible for?",
    "optionA": "bad-block recovery",
    "optionB": "booting from disk",
    "optionC": "disk initialization",
    "optionD": "all of the mentioned",
    "optionE": "",
    "correctOption": "D",
    "marks": 1,
    "explanation": "The OS handles disk initialization, bad-block recovery, and booting."
  },
  {
  
    "questionTxt": "Using transient code,____the size of the operating system during program execution.",
    "optionA": "maintains",
    "optionB": "changes",
    "optionC": "increases",
    "optionD": "decreases ",
    "optionE": "",
    "correctOption": "B",
    "marks": 1,
    "explanation": "Transient code changes the OS size during execution."
  },
  {
  
    "questionTxt": "The operating system maintains a___ table that keeps track of how many frames have been allocated, how many are there, and how many are available.",
    "optionA": "memory",
    "optionB": "mapping",
    "optionC": "page",
    "optionD": "frame",
    "optionE": "",
    "correctOption": "D",
    "marks": 1,
    "explanation": "The frame table tracks allocated, free, and available memory frames."
  },
  {
  
    "questionTxt": "To obtain better memory utilization, dynamic loading is used. With dynamic loading, a routine is not oaded until it is called. For implementing dynamic loading",
    "optionA": "special support from operating system is essential",
    "optionB": "special support from hardware is required",
    "optionC": "user programs can implement dynamic loading without any special support from hardware or operating system",
    "optionD": "special support from both hardware and operating system is essential",
    "optionE": "",
    "correctOption": "C",
    "marks": 1,
    "explanation": "Dynamic loading can be implemented by user programs without OS or hardware support."
  },
  {
  
    "questionTxt": "The ____ presents a uniform device-access interface to the I/O subsystem, much as system calls provide a standard interface between the application and the operating system.",
    "optionA": "Device drivers",
    "optionB": "I/O systems",
    "optionC": "Devices",
    "optionD": "Buses",
    "optionE": "",
    "correctOption": "A",
    "marks": 1,
    "explanation": "Device drivers provide a uniform device access interface to the OS."
  },
  {
  
    "questionTxt": "In real time operating system ____________",
    "optionA": " all processes have the same priority",
    "optionB": "process scheduling can be done only once",
    "optionC": "kernel is not required",
    "optionD": "a task must be serviced by its deadline period",
    "optionE": "",
    "correctOption": "D",
    "marks": 1,
    "explanation": "Real-time OS must complete tasks within deadline periods."
  },
  {
  
    "questionTxt": "Hard real time operating system has ____ jitter than a soft real time operating system.",
    "optionA": "equal",
    "optionB": "more",
    "optionC": "less",
    "optionD": "none of the mentioned",
    "optionE": "",
    "correctOption": "C",
    "marks": 1,
    "explanation": "Hard real-time OS have less jitter than soft real-time OS."
  },
  {
  
    "questionTxt": "For real time operating systems, interrupt latency should be",
    "optionA": "zero",
    "optionB": "minimal",
    "optionC": "maximum",
    "optionD": "dependent on the scheduling",
    "optionE": "",
    "correctOption": "B",
    "marks": 1,
    "explanation": "Interrupt latency in RTOS should be minimal."
  },
  {
  
    "questionTxt": "Which one of the following is a real time operating system?",
    "optionA": "Windows CE",
    "optionB": "RTLinux",
    "optionC": "VxWorks",
    "optionD": "All of the mentioned",
    "optionE": "",
    "correctOption": "D",
    "marks": 1,
    "explanation": "Windows CE, RTLinux, and VxWorks are real-time operating systems."
  },
  {
  
    "questionTxt": "The priority of a process will if the scheduler assigns it a static priority.",
    "optionA": "depends on the operating system",
    "optionB": "change",
    "optionC": "remain unchanged",
    "optionD": "none of the mentioned",
    "optionE": "",
    "correctOption": "C",
    "marks": 1,
    "explanation": "Static priority processes maintain their priority."
  },
  {
  
    "questionTxt": "What are the characteristics of Host based IDS? a) Logs are analysed to detect tails of intrusion b) The host operating system logs in the audit information",
    "optionA": "",
    "optionB": "",
    "optionC": "",
    "optionD": "",
    "optionE": "",
    "correctOption": "A",
    "marks": 1,
    "explanation": "Host-based IDS analyzes logs to detect intrusions."
  },
  {
  
    "questionTxt": "What are the characteristics of stack based IDS?",
    "optionA": "It is programmed to interpret a certain series of packets",
    "optionB": "It models the normal usage of the network as a noise characterization",
    "optionC": "They are integrated closely with the TCP/IP stack and watch packets",
    "optionD": "The host operating system logs in the audit information",
    "optionE": "",
    "correctOption": "C",
    "marks": 1,
    "explanation": "Stack-based IDS works closely with TCP/IP stack and inspects packets."
  },
  {
  
    "questionTxt": "If the sum of the working - set sizes increases, exceeding the total number of available frames",
    "optionA": "the operating system selects a process to suspend",
    "optionB": "the system crashes",
    "optionC": "then the process crashes",
    "optionD": "the memory overflows",
    "optionE": "",
    "correctOption": "A",
    "marks": 1,
    "explanation": "If working set exceeds available frames, OS suspends a process."
  },
  {
  
    "questionTxt": "The information about all files is kept in",
    "optionA": "operating system",
    "optionB": "separate directory structure",
    "optionC": "swap space",
    "optionD": "none of the mentioned",
    "optionE": "",
    "correctOption": "B",
    "marks": 1,
    "explanation": "File info is kept in a separate directory structure."
  },
  {
  
    "questionTxt": "The operating system keeps a small table containing information about all open files called",
    "optionA": "file table",
    "optionB": "directory table",
    "optionC": "open-file table",
    "optionD": "system table",
    "optionE": "",
    "correctOption": "C",
    "marks": 1,
    "explanation": "OS maintains an open-file table for all open files."
  },
  {
  
    "questionTxt": "What will happen in the single level directory?",
    "optionA": "All files are contained in the same directory",
    "optionB": "All files are contained in different directories all at the same level",
    "optionC": "Depends on the operating system",
    "optionD": "None of the mentioned",
    "optionE": "",
    "correctOption": "A",
    "marks": 1,
    "explanation": "In a single-level directory, all files are in the same directory."
  },
  {
  
    "questionTxt": "To recover from failures in the network operations information may be maintained.",
    "optionA": "operating system",
    "optionB": "ip address",
    "optionC": "stateless",
    "optionD": "state",
    "optionE": "",
    "correctOption": "D",
    "marks": 1,
    "explanation": "State information helps recover from network failures."
  },
  {
  
    "questionTxt": "On systems where there are multiple operating system, the decision to load a particular one is done by",
    "optionA": "process control block",
    "optionB": "file control block",
    "optionC": "boot loader",
    "optionD": "bootstrap",
    "optionE": "",
    "correctOption": "C",
    "marks": 1,
    "explanation": "Boot loader selects and loads the OS."
  },
  {
  
    "questionTxt": "Whenever a process needs I/O to or from a disk it issues a",
    "optionA": "system call to the operating system",
    "optionB": "a special procedure",
    "optionC": "system call to the CPU",
    "optionD": "all of the mentioned",
    "optionE": "",
    "correctOption": "A",
    "marks": 1,
    "explanation": "Processes use system calls to request I/O operations from OS."
  },
  {
  
    "questionTxt": "The two steps the operating system takes to use a disk to hold its files are and",
    "optionA": "caching & logical formatting",
    "optionB": "logical formatting & swap space creation",
    "optionC": "swap space creation & caching",
    "optionD": "partitioning & logical formatting",
    "optionE": "",
    "correctOption": "D",
    "marks": 1,
    "explanation": "Partitioning and logical formatting prepare a disk for use."
  },
  {
  
    "questionTxt": "The ____ program initializes all aspects of the system, from CPU registers to device controllers and the contents of main memory, and then starts the operating system. d) rom",
    "optionA": "bootstrap",
    "optionB": "main",
    "optionC": "bootloader",
    "optionD": "rom",
    "optionE": "",
    "correctOption": "A",
    "marks": 1,
    "explanation": "Bootstrap initializes hardware and loads the OS."
  },
  {
  
    "questionTxt": "In SCSI disks used in high end PCs, the controller maintains a list of on the disk. The disk is initialized during formatting which sets aside spare sectors not visible to the operating system.",
    "optionA": "destroyed blocks, partitioning",
    "optionB": "bad blocks, low level formatting",
    "optionC": "destroyed blocks, high level formatting",
    "optionD": "bad blocks, partitioning",
    "optionE": "",
    "correctOption": "B",
    "marks": 1,
    "explanation": "Bad blocks list is maintained and low-level formatting allocates spare sectors."
  },
  {
  
    "questionTxt": "Which principle states that programs, users, and even the systems be given just enough privileges to perform their task?",
    "optionA": "principle of least privilege",
    "optionB": "principle of process scheduling",
    "optionC": "principle of operating system",
    "optionD": "none of the mentioned",
    "optionE": "",
    "correctOption": "A",
    "marks": 1,
    "explanation": "Principle of least privilege gives minimum required access."
  },
  {
  
    "questionTxt": "Network operating system runs on",
    "optionA": "every system in the network",
    "optionB": "server",
    "optionC": "both server and every system in the network",
    "optionD": "none of the mentioned",
    "optionE": "",
    "correctOption": "B",
    "marks": 1,
    "explanation": "Network OS runs on the server."
  },
  {
  
    "questionTxt": "What are the types of distributed operating systems?",
    "optionA": "Zone based Operating system",
    "optionB": "Level based Operating system",
    "optionC": "Network Operating system",
    "optionD": "All of the mentioned",
    "optionE": "",
    "correctOption": "D",
    "marks": 1,
    "explanation": "Distributed OS types include Network OS and others."
  },
  {
  
    "questionTxt": "In Unix, which system call creates the new process? a) create b) fork",
    "optionA": "create",
    "optionB": "fork",
    "optionC": "new",
    "optionD": " none of the mentioned",
    "optionE": "",
    "correctOption": "B",
    "marks": 1,
    "explanation": "In Unix, fork() creates a new process."
  }
]

