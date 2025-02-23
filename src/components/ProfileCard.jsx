import React from "react";
import PropTypes from "prop-types";

const ProfileCard = React.memo(({ member }) => {
  return (
    <div className="relative group w-full max-w-sm mx-auto bg-gradient-to-r from-orange-100 to-orange-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      {/* Profile Image */}
      <div className="w-full h-60 overflow-hidden bg-orange-200 animate-pulse">
        <img
          src={member.image}
          alt={`${member.name} - ${member.role}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Name and Role */}
      <div className="p-4 text-center ">
        <h4 className="text-xl text-slate-800 font-bold mb-1">{member.name}</h4>
        <p className="text-slate-600 text-lg font-medium">{member.role}</p>
      </div>

      {/* Description on Hover */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-200 bg-opacity-90 flex items-center justify-center text-slate-800 text-sm px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      >
        {member.bio}
      </div>
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