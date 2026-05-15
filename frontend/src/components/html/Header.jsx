import { Tooltip } from "@mui/material";

const Header = () => {
  return (
    <div className="relative">
      <div className="w-fit h-fit space-y-0">
        <div className="flex flex-row justify-between">
          <div className="hidden sm:flex sm:flex-col justify-evenly leading-5 text-sm py-2 px-4">
            <p>Glen Allen, VA, United States</p>
            <p>jordan.adkins111@gmail.com</p>
            <p>+13092307966</p>
          </div>
          <div className="flex flex-col w-full sm:w-fit bg-white z-10 space-y-2 py-2 border-y-4 border-deepGrayBlue">
            <p className="text-2xl sm:text-lg md:text-xl lg:text-2xl text-center font-bold tracking-widest">
              JORDAN ADKINS
            </p>
            <div className="flex flex-col">
              <p className="text-base lg:text-lg text-center mb-2 tracking-widest">
                DEVELOPER
              </p>
              <div className="flex flex-wrap gap-2 justify-evenly">
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
            </div>
            <div className="flex flex-row w-full justify-evenly">
              <div className="sm:hidden text-center px-4">
                <p>Ashland, VA, US</p>
                <p>jordan.adkins111@gmail.com</p>
                <p>(309)230-7966</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative py-4 space-y-1 pl-4 border-r-4 border-deepGrayBlue">
          <h1 className="font-bold text-lg tracking-widest">
            PROFESSIONAL SUMMARY
          </h1>
          <p className="text-sm w-[92%]">
            Full Stack Developer with hands-on experience building
            production-grade web applications using JavaScript/TypeScript,
            React, Node.js, PostgreSQL, and cloud platforms. Strong focus on
            backend architecture, authentication, APIs, and scalable data-driven
            features. Known for learning quickly, owning projects beginning to
            end, and shipping reliable systems.
          </p>
        </div>
      </div>
      <div className="absolute -top-10 right-0 border-r-4 border-deepGrayBlue h-[80%]"></div>
    </div>
  );
};

export default Header;
