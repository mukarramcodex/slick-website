import React from "react";
import { Button } from "../../../ui/button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ServiceDetailHero = ({
  backgroundImg,
  backgroundImgAlt = "Background image",
  heading,
  paragraph,
  btnText,
  btnLink,
  features = [],
  rightImage,
  rightImageAlt = "Right side image",
  statIcon = "ph ph-chart-line-up",
  statValue,
  statLabel,
}) => {
  return (
    <section className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-black to-gray-600 relative overflow-hidden flex items-center">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url('${backgroundImg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      ></div>

      {/* Hidden img for accessibility */}
      <img src={backgroundImg} alt={backgroundImgAlt} className="hidden" />

      {/* Main content */}
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            {heading && (
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                {heading}
              </h1>
            )}
            {paragraph && (
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {paragraph}
              </p>
            )}

            {/* Features List */}
            {features.length > 0 && (
              <div className="flex flex-wrap gap-4 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-800 px-4 py-2 rounded-full shadow-sm"
                  >
                    <i className="ph ph-check-circle text-[#e6002e] mr-2"></i>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Button */}
            {btnText && btnLink && (
              <Link to={btnLink}>
                <Button className="!rounded-button whitespace-nowrap bg-[#e6002e] hover:bg-[#c5001f] text-white px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                  <i className="ph ph-chat-circle-text mr-2"></i>
                  {btnText}
                </Button>
              </Link>
            )}
          </div>

          {/* Right Image + Stat Card */}
          {rightImage && (
            <div className="relative">
              <img
                src={rightImage}
                alt={rightImageAlt}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />

              {statValue && statLabel && (
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#e6002e] rounded-full flex items-center justify-center">
                      <i className={`${statIcon} text-white text-xl`}></i>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{statValue}</div>
                      <div className="text-sm text-gray-600">{statLabel}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

ServiceDetailHero.propTypes = {
  backgroundImg: PropTypes.string.isRequired,
  backgroundImgAlt: PropTypes.string,
  heading: PropTypes.string,
  paragraph: PropTypes.string,
  btnText: PropTypes.string,
  btnLink: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  rightImage: PropTypes.string,
  rightImageAlt: PropTypes.string,
  statIcon: PropTypes.string,
  statValue: PropTypes.string,
  statLabel: PropTypes.string,
};

export default ServiceDetailHero;
