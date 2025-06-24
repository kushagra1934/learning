# Docker Architecture

- **Docker Engine**
- **Docker Daemon**
- **Docker CLI** (Client)

---

## What is the difference between virtualization and containerization?

- **Virtualization:** Runs multiple virtual machines (VMs) on a single physical server using a hypervisor. Each VM has its own full operating system, making it resource-intensive but providing strong isolation.
- **Containerization:** Runs multiple containers on a single OS kernel. Containers share the host OS kernel but are isolated at the user space level, making them lightweight, fast, and efficient.

| Aspect       | Virtualization (VMs) | Containerization (Containers)         |
| ------------ | -------------------- | ------------------------------------- |
| Isolation    | Full OS per VM       | Shared OS kernel, isolated user space |
| Resource Use | High                 | Low                                   |
| Startup Time | Slow                 | Fast                                  |
| Portability  | Good                 | Excellent                             |

---

## What is `docker ps`?

Lists currently running containers.

---

## Key Concepts

- **Images:** Blueprints or read-only templates that contain the application code, runtime, system tools, libraries, and dependencies needed to run the application.
- **Containers:** Standardized, executable units of software that package up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.
- **Dockerfile:** A text file containing a set of instructions used to automate the creation of a Docker image.

---

## Docker Workflow

1. Write a Dockerfile (set of instructions).
2. Build an image from the Dockerfile.
3. Run a container from the image (can also pull prebuilt images and run them to create containers).

**Example:**

- `docker run image_name` → Pulls the image (if not present) and creates a container from it.

---

## What happens when running a Docker image?

1. Docker client contacts the Docker daemon.
2. Docker daemon pulls the image (e.g., "hello-world") from Docker Hub (if not present locally).
3. Docker daemon creates a new container from that image and runs the executable.
4. Docker daemon sends the output to the Docker client, which displays it.

---

## Useful Docker Commands

- `docker run -d ...` → Run the container in the background (detached mode).
- `docker exec -it <container_id> bash` → Start an interactive bash shell inside a running container (useful for debugging or running commands, e.g., for SQL).
- `docker run -itd ubuntu` → Run an Ubuntu container in interactive, detached mode (keeps running, doesn't stop by itself).
- `docker build -t <image_name> .` → Build an image from the Dockerfile in the current directory (`-t` is used to name the image).
- `docker run -p <host_port>:<container_port> ...` → Map container ports to host ports (e.g., `-p 80:80`).

---

## How to Make a Dockerfile?

1. Pull the base image (provides all necessary tools and libraries).
2. Create a folder where the app code will be stored.
3. Copy source code from the host to the container.
4. Compile or set up the application code as needed.

A sample Dockerfile is available in this folder.

---

## Notes

- If the Dockerfile or source code is updated, rebuild the image. Docker uses caching from previous builds to speed up the process.
