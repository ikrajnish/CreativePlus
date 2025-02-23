import React from "react";
import PropTypes from "prop-types";

const ProfileCard = React.memo(({ member }) => {
  return (
    <div className="relative w-full max-w-xs mx-auto bg-orange-50 border-2 border-orange-300 rounded-xl shadow-md p-6 text-center 
      transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      
      {/* Profile Image - Circular with Black Border */}
      <div className="flex justify-center">
        <div className="relative w-32 h-32 rounded-full border-4 border-black overflow-hidden">
          <img
            src={member.image}
            alt={`${member.name} - ${member.role}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Name */}
      <h4 className="text-xl font-extrabold text-orange-600 mt-4">{member.name}</h4>

      {/* Role with Black Badge */}
      <div className="flex justify-center mt-2">
        <span className="bg-black text-white text-xs font-semibold px-4 py-1 rounded-full">
          {member.role}
        </span>
      </div>

      {/* Experience */}
      <p className="text-slate-700 text-sm mt-3">{member.bio}</p>
    </div>
  );
});

ProfileCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfileCard;
