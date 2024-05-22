import { Tooltip } from "@mui/material";

const Header = () => {
  return (
    <div className="relative">
      <div className="w-fit h-fit space-y-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-evenly leading-5 text-sm py-2 px-4">
            <p>Glendale, AZ, United States</p>
            <p>jordan.adkins111@gmail.com</p>
            <p>+13092307966</p>
          </div>
          <div className="bg-white z-10 space-y-2 py-2 border-y-4 border-black">
            <p className="md:text-2xl lg:text-4xl font-bold tracking-widest">
              JORDAN ADKINS
            </p>
            <div className="flex">
              <div className="flex gap-2 mx-auto">
                <a
                  href="https://scl.io/bsKFl8E"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Tooltip
                    followCursor
                    title={
                      <img
                        src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/59341385"
                        height="250"
                        width="250"
                        alt="Tooltip Image"
                      />
                    }
                  >
                    <img
                      src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/59341385"
                      alt="Badge"
                      height="30"
                      width="30"
                    />
                  </Tooltip>
                </a>
                <Tooltip
                  followCursor
                  title={
                    <img
                      src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/59341385"
                      height="250"
                      width="250"
                      alt="Tooltip Image"
                    />
                  }
                >
                  <img
                    src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/59341385"
                    alt="Badge"
                    height="30"
                    width="30"
                  />
                </Tooltip>
                <Tooltip
                  followCursor
                  title={
                    <img
                      src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/59341385"
                      height="250"
                      width="250"
                      alt="Tooltip Image"
                    />
                  }
                >
                  <img
                    src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/59341385"
                    alt="Badge"
                    height="30"
                    width="30"
                  />
                </Tooltip>
              </div>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-right tracking-widest">
                DEVELOPER
              </p>
            </div>
          </div>
        </div>
        <div className="relative space-y-1 pl-6 border-r-4 border-black">
          <h1 className="font-bold text-lg tracking-widest">
            PROFESSIONAL SUMMARY
          </h1>
          <p className="text-sm w-[92%]">
            Developer leveraging a strong foundation in JavaScript, Java,
            React.js, and Spring to create dynamic software solutions. Through
            roles ranging from a Freelance Tutor to a Bag Service Agent, this
            professional has honed an ability to simplify complex problems and
            foster collaborative improvements, embodying a unique blend of
            technical expertise and interpersonal skills. With a passion for
            continuous learning and innovation, this candidate is poised to
            deliver cutting-edge applications and mentor teams towards achieving
            collective goals.
          </p>
        </div>
      </div>
      <div className="absolute -top-10 right-0 border-r-4 border-black h-[80%]"></div>
    </div>
  );
};

export default Header;
