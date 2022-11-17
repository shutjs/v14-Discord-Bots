module.exports = {
  apps: [
    {
      name: "Mainframe",
      namespace: "Shut",
      script: 'main.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Server/Voucher"
    },
    {
      name: "Requirements",
      namespace: "Shut",
      script: 'main.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Server/Requirements"
    },
    {
      name: "Sync",
      namespace: "Shut",
      script: 'main.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Server/Sync"
    },
    {
      name: "Moderation",
      namespace: "Shut",
      script: 'main.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Server/Moderation"
    },
    {
      name: "Main System",
      namespace: "Shut",
      script: 'shut.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Server/tagsystem"
    },
    {
      name: "Welcome",
      namespace: "Shut",
      script: 'shut.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Server/Welcome"
    },
    {
      name: "Statistics",
      namespace: "Shut",
      script: 'main.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Server/Statistics"
    },
    {
      name: "Security_I",
      namespace: "Shut",
      script: 'main.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Server/Guard_I"
    },
    {
      name: "Security_II",
      namespace: "Shut",
      script: 'main.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Server/Guard_II"
    },
    {
      name: "Security_III",
      namespace: "Shut",
      script: 'main.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Server/Guard_III"
    },
    {
      name: "Security_IV",
      namespace: "Shut",
      script: 'main.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Server/Guard_IV"
    },
    {
      name: "Distributors",
      namespace: "Shut",
      script: 'main.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Server/Distributors"
    },
  ]
};