# NGINX Overview

NGINX is a high-performance web server that can also function as a:

- **Load Balancer**
- **Reverse Proxy**
- **HTTP Cache**
- **Content Delivery Solution**

---

## Key Features

### 1. Load Balancing

- Distributes incoming traffic across multiple backend servers.
- Improves performance, reliability, and provides redundancy.
- Common load balancing methods:
  1. **Least Connections:** New requests go to the server with the fewest active connections.
  2. **Round Robin:** Requests are distributed sequentially among servers.
  3. **IP Hash:** Requests from the same client IP go to the same server (useful for session persistence).

https://d2h1bfu6zrdxog.cloudfront.net/wp-content/uploads/2022/12/img_638919074a163.png

### 2. Reverse Proxy

- Acts as an intermediary between clients and one or more backend servers.
- Receives client requests, forwards them to the appropriate backend server, and relays the response back to the client.
- Hides the details of backend servers from clients, improving security and flexibility.

### 3. Caching

- Temporarily stores responses to improve performance and reduce load on backend servers.
- Can cache static and dynamic content.

### 4. SSL/TLS Termination

- Handles SSL/TLS encryption and decryption, offloading this work from backend servers.
- Enables secure (HTTPS) communication.

### 5. Compression

- Can compress responses before sending them to clients (e.g., gzip), reducing bandwidth and improving load times (used by companies like Netflix).

### 6. Security

- Acts as a security layer, reducing the attack surface of backend servers.
- Supports rate limiting, access control, and filtering of malicious requests.

### 7. Static File Serving

- Can serve static files (HTML, CSS, JS, images) directly, reducing the need for backend processing.

---

## NGINX Configuration

- The `nginx.conf` file sets up server behavior, such as:
  - Serving files directly
  - Forwarding traffic to other web servers (reverse proxy)
  - Configuring load balancing algorithms
  - Caching responses
  - Setting up SSL/TLS

---

## NGINX as a Kubernetes (k8s) Ingress Controller

- NGINX can be used as an ingress controller in Kubernetes clusters.
- Manages external access to services in a cluster, typically via HTTP/HTTPS.
- Provides features like SSL termination, path-based routing, and load balancing for Kubernetes services.

---

## Additional Notes

- NGINX is highly configurable and supports modules for extended functionality.
- Widely used for microservices architectures, cloud-native deployments, and as a front-end for application servers.
- Known for its low resource usage and ability to handle a large number of concurrent connections efficiently.
