# Getting Started

### Installation

1. Clone this project
1. Run: `bin/setup`
1. Run: `bin/services up -d`
1. Run: `bin/services logs` to tail logs
1. Navigate to `http://localhost:3000` in your browser

### Development

Not all code changes will be automatically recognized, so you'll need to restart the stack:

Run: `bin/services down; bin/services up -d; bin/services logs`
