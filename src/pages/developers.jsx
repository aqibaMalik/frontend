import { Users } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Developers = () => {
  return (
    <div
      className="card border-0 shadow-lg rounded-5 overflow-hidden position-relative"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8f5ff 100%)",
      }}
    >
      <div
        className="position-absolute top-0 end-0"
        style={{
          width: "180px",
          height: "180px",
          background: "rgba(108, 76, 241, 0.12)",
          filter: "blur(60px)",
          borderRadius: "50%",
        }}
      ></div>

      <div className="card-body p-5 position-relative">
        {/* HEADER */}
        <div className="d-flex align-items-center gap-4 mb-5">
          <div
            className="d-flex align-items-center justify-content-center rounded-5 bg-primary-subtle text-primary shadow-sm"
            style={{
              width: "90px",
              height: "90px",
            }}
          >
            <Users size={42} />
          </div>

          <div>
            <h1 className="fw-bold text-dark mb-2 display-6">
              Meet Our Developers
            </h1>

            <p className="text-secondary fs-5 mb-0">
              The creative minds behind Ansign.
            </p>
          </div>
        </div>

        {/* DEVELOPERS */}
        <div className="row g-4">
          <Developer
            initial="A"
            name="Aqib Ahmad Malik"
            rollNo="220407"
            color="primary"
            role="Frontend Developer"
            description="Designed and built the responsive frontend interface using React and Bootstrap, integrated webcam functionality, and improved overall user experience."
            githubUrl="https://github.com/aqibaMalik"
            emailAddress="aqibm2498@gmail.com"
          />
          <Developer
            initial="FW"
            name="Firdous Ahmad Wani"
            rollNo="220475"
            color="success"
            role="Backend Developer"
            description="Developed the backend architecture using Python, managed APIs, handled database integration, and ensured smooth communication between the frontend and AI modules."
            githubUrl="https://github.com/Firdous"
            emailAddress="Firdouswani520@gmail.com"
          />

          <Developer
            initial="FL"
            name="Faheem Shakeel Lone"
            rollNo="220426"
            color="info"
            role="AI / ML Engineer"
            description="Worked on training and integrating the machine learning model for real-time sign language recognition using computer vision and AI techniques."
            githubUrl="https://github.com/Itsfaheemlone"
            emailAddress="Faheemlone151@gmail.com"
          />

          <Developer
            initial="I"
            name="Insha Ikhlaq"
            rollNo="220463"
            color="dark"
            role="Research & Documentation"
            description="Contributed to project research, documentation, testing, presentation preparation, and helped organize system requirements and workflow planning."
            emailAddress="Inshaikhlaq571@gmail.com"
          />
        </div>

        {/* GROUP PHOTO */}
        <div className="col-12 p-2 mt-5">
          <div className="bg-white border rounded-5 p-4 shadow-sm overflow-hidden">
            <div className="mb-4">
              <h2 className="fw-bold text-dark mb-2">Development Team</h2>

              <p className="text-secondary mb-0">
                Meet the creative minds behind Ansign.
              </p>
            </div>

            <div
              className="position-relative rounded-5 overflow-hidden border"
              style={{
                height: "420px",
                background: "linear-gradient(135deg, #f8f9ff 0%, #eef1ff 100%)",
              }}
            >
              <img
                src="/trio.jpeg"
                alt="team"
                className="w-100 h-100 object-fit-cover"
              />

              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.05))",
                }}
              ></div>

              <div
                className="position-absolute top-0"
                style={{
                  left: "33.33%",
                  width: "3px",
                  height: "100%",
                  background: "rgba(255,255,255,0.75)",
                }}
              ></div>

              <div
                className="position-absolute top-0"
                style={{
                  left: "60.66%",
                  width: "3px",
                  height: "100%",
                  background: "rgba(255,255,255,0.75)",
                }}
              ></div>

              <div
                className="position-absolute bottom-0 start-0 text-white p-4"
                style={{ width: "33.33%" }}
              >
                <h3 className="fw-bold mb-1 text-uppercase">FIRDOUS</h3>
                <span>Backend Developer</span>
              </div>

              <div
                className="position-absolute bottom-0 text-white p-4"
                style={{
                  left: "33.33%",
                  width: "33.33%",
                }}
              >
                <h3 className="fw-bold mb-1 text-uppercase">AQIB</h3>
                <span>Frontend Developer</span>
              </div>

              <div
                className="position-absolute bottom-0 text-white p-4"
                style={{
                  left: "66.66%",
                  width: "33.33%",
                }}
              >
                <h3 className="fw-bold mb-1 text-uppercase">FAHEEM</h3>
                <span>AI / ML Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Developers

const Developer = ({
  name,
  rollNo,
  initial,
  color,
  githubUrl,
  emailAddress,
  role,
  description,
}) => {
  return (
    <div className="col-md-6">
      <div className="bg-white border rounded-5 p-4 shadow-sm h-100">
        <div className="d-flex align-items-center gap-3 mb-4">
          <div
            className={`rounded-circle bg-${color} text-white d-flex align-items-center justify-content-center fw-bold`}
            style={{
              width: "70px",
              height: "70px",
              fontSize: "24px",
            }}
          >
            {initial}
          </div>

          <div>
            <h4 className="fw-bold text-dark mb-1">{name}</h4>

            <span className={`text-${color} fw-semibold`}>
              Roll No. {rollNo}
            </span>
          </div>
        </div>

        <div className="mb-3">
          <span className={`badge bg-${color}-subtle text-${color} px-3 py-2`}>
            {role}
          </span>
        </div>

        <p className="text-secondary lh-lg">{description}</p>

        <div className="d-flex gap-3 mt-4">
          <a href={githubUrl} target="_blank">
            <button className="btn btn-light border rounded-4">
              <FaGithub size={18} />
            </button>
          </a>

          <a
            href={`mailto:${emailAddress}`}
            className="btn btn-light border rounded-4 px-3"
            title={`Send Mail to ${emailAddress}`}
          >
            <MdEmail size={18} />
          </a>
        </div>
      </div>
    </div>
  )
}
