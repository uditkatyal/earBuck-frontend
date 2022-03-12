import "./Landing.css";
import "boxicons";
const Landing = () => {
  return (
    <>
      <section class="banner">
        <div class="container">
          <div class="banner-text">
            <h1>
              EarB
              {/* <i class="bx bx-bitcoin"></i> */}
              uck
            </h1>
            <p>
              <strong>
                {/* We make it easy to get the most out of your virtual machine. */}
                An online budget tracker.
              </strong>{" "}
              One stop for all your budget tracking needs. We present an
              intelligent online budget tracker (BlueTracker) to efficiently
              manage budget.
              {/* Our system will help to plan and track budget
              related issues where members of the system can securely access it
              anytime from anywhere via the Internet. */}
            </p>
            <button>Sign Up</button>
            <button style={{ marginLeft: "19px" }}>Sign In</button>
          </div>
        </div>
        <img
          class="banner-image"
          src="https://preview.ibb.co/bMi5Y6/banner_img.png"
          alt="monitoring"
        />
      </section>

      <div class="container">
        <div class="row">
          <div class="mb-30 col-md-6 col-lg-4">
            <div class="card">
              <img
                class="card-icon"
                src="https://image.ibb.co/cFV8mR/monitoring.png"
                alt="monitoring"
              />
              <h3 class="card-title">Managing Expense</h3>
              <p class="card-text">
                Create a spending plan for your money to ensures that you will
                always have enough money for the things you need and the things
                that are important to you.
              </p>
              <a class="card-link" href="#">
                Learn more
              </a>
            </div>
          </div>
          <div class="mb-30 col-md-6 col-lg-4">
            <div class="card">
              <img
                class="card-icon"
                src="https://image.ibb.co/jfmg6R/cloud_firewalls.png"
                alt="monitoring"
              />
              <h3 class="card-title">Budget control</h3>
              <p class="card-text">
                Preparing budgets for the future period, comparing the standards
                set by budget with the actual performance.
              </p>
              <a class="card-link" href="#">
                Learn more
              </a>
            </div>
          </div>
          <div class="mb-30 col-md-6 col-lg-4">
            <div class="card">
              <img
                class="card-icon"
                src="https://image.ibb.co/fcnzt6/team_management.png"
                alt="team management"
              />
              <h3 class="card-title">Team Management</h3>
              <p class="card-text">
                With Digital Teams you can invite and manage users, ensure
                security with authentication, and control your resource spend
                with centralized billing–at no additional cost.
              </p>
              <a class="card-link" href="#">
                Learn more
              </a>
            </div>
          </div>
          <div class="mb-30 col-md-6 col-lg-4">
            <div class="card">
              <img
                class="card-icon"
                src="https://image.ibb.co/evyiLm/backups.png"
                alt="monitoring"
              />
              <h3 class="card-title">Investment Plan</h3>
              <p class="card-text">
                Backups run automatically on your Droplets each week and are
                stored for four weeks–add 20% of monthly Droplet cost.
              </p>
              <a class="card-link" href="#">
                Learn more
              </a>
            </div>
          </div>
          <div class="mb-30 col-md-6 col-lg-4">
            <div class="card">
              <img
                class="card-icon"
                src="https://image.ibb.co/g9bERR/snapshots.png"
                alt="snapshots"
              />
              <h3 class="card-title">Graphical Represenation</h3>
              <p class="card-text">
                Scale out your system effortlessly. Just take a snapshot of an
                existing server, then spin up a new Droplet from the
                snapshot–add $0.05 per gigabyte per month.
              </p>
              <a class="card-link" href="#">
                Learn more
              </a>
            </div>
          </div>
          <div class="mb-30 col-md-6 col-lg-4">
            <div class="card">
              <img
                class="card-icon"
                src="https://image.ibb.co/cFV8mR/monitoring.png"
                alt="monitoring"
              />
              <h3 class="card-title">Monitoring Expense</h3>
              <p class="card-text">
                Collect metrics on visibility, monitor Droplet performance and
                receive alerts when problems arise in your infrastructure–at no
                additional cost.
              </p>
              <a class="card-link" href="#">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "50px" }} class="wrapper">
        <h1>Our Team</h1>
        <div class="team">
          <div class="team_member">
            <div class="team_img">
              <img src="src/assets/images/ayush.jpeg" alt="Team_image" />
            </div>
            <a href="https://www.linkedin.com/in/ayushverma02/" target="_blank">
              <h3>Ayush Verma</h3>
            </a>
            <p class="role">Full Stack Developer</p>
            <p>
              Full Stack Web Developer
              <br />
              Django | Rest API | MERN
            </p>
          </div>
          <div class="team_member">
            <div class="team_img">
              <img src="src/assets/images/udit.jpeg" alt="Team_image" />
            </div>
            <a
              href="https://www.linkedin.com/in/udit-katyal-9b0498203/"
              target="_blank"
            >
              <h3>Udit Katyal</h3>
            </a>
            <p class="role">Frontend and UI Developer</p>
            <p>
              Frontend Web Developer
              <br />
              Learner | C++ | Web Development | Gwoc@21 | Open-Source | Blogger
            </p>
          </div>
          <div class="team_member">
            <div class="team_img">
              <img src="src/assets/images/vaibhav.jpeg" alt="Team_image" />
            </div>
            <a
              href="https://www.linkedin.com/in/vaibhav-kumar5/"
              target="_blank"
            >
              <h3>Vaibhav Kumar</h3>
            </a>
            <p class="role">Frontend and API Tester</p>
            <p>Proficient in JAVA, HTML, CSS, and JAVASCRIPT.</p>
          </div>
          <div class="team_member">
            <div class="team_img">
              <img src="src/assets/images/amrit.jpeg" alt="Team_image" />
            </div>
            <a
              href="https://www.linkedin.com/in/amrit-thakkar-32112221a/"
              target="_blank"
            >
              <h3>Amrit Thakkar</h3>
            </a>
            <p class="role">Team Lead (Frontend Developer)</p>
            <p>Team Lead | Core Coder | JS Enthusiast</p>
          </div>
        </div>
      </div>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <ul>
                <li>Footer Link</li>
                <li>Footer Link</li>
                <li>Footer Link</li>
                <li>Footer Link</li>
                <li>Footer Link</li>
                <li>Footer Link</li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul>
                <li>Footer Link</li>
                <li>Footer Link</li>
                <li>Footer Link</li>
                <li>Footer Link</li>
                <li>Footer Link</li>
                <li>Footer Link</li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul>
                <li>Footer Link</li>
                <li>Footer Link</li>
                <li>Footer Link</li>
                <li>Footer Link</li>
                <li>Footer Link</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Landing;
