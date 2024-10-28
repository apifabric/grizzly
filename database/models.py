# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 28, 2024 15:39:43
# Database: sqlite:////tmp/tmp.jmTObIMHYC/grizzly/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Accommodation(SAFRSBaseX, Base):
    """
    description: Table to store accommodation details for tours.
    """
    __tablename__ = 'accommodations'
    _s_collection_name = 'Accommodation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    location = Column(String)
    capacity = Column(Integer, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    AccommodationBookingList : Mapped[List["AccommodationBooking"]] = relationship(back_populates="accommodation")



class Activity(SAFRSBaseX, Base):
    """
    description: Table to store available activities during tours.
    """
    __tablename__ = 'activities'
    _s_collection_name = 'Activity'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    TourActivityList : Mapped[List["TourActivity"]] = relationship(back_populates="activity")



class Customer(SAFRSBaseX, Base):
    """
    description: Table to store customer information.
    """
    __tablename__ = 'customers'
    _s_collection_name = 'Customer'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True)
    phone = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    BookingList : Mapped[List["Booking"]] = relationship(back_populates="customer")
    ReviewList : Mapped[List["Review"]] = relationship(back_populates="customer")



class Guide(SAFRSBaseX, Base):
    """
    description: Table to store guide details.
    """
    __tablename__ = 'guides'
    _s_collection_name = 'Guide'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    experience_years = Column(Integer, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    GuideAssignmentList : Mapped[List["GuideAssignment"]] = relationship(back_populates="guide")



class Tour(SAFRSBaseX, Base):
    """
    description: Table to store tour information.
    """
    __tablename__ = 'tours'
    _s_collection_name = 'Tour'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)
    price_per_person = Column(Float, nullable=False)
    duration_days = Column(Integer, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    BookingList : Mapped[List["Booking"]] = relationship(back_populates="tour")
    GuideAssignmentList : Mapped[List["GuideAssignment"]] = relationship(back_populates="tour")
    ReviewList : Mapped[List["Review"]] = relationship(back_populates="tour")
    TourActivityList : Mapped[List["TourActivity"]] = relationship(back_populates="tour")



class Transportation(SAFRSBaseX, Base):
    """
    description: Table to store transportation options for tours.
    """
    __tablename__ = 'transportations'
    _s_collection_name = 'Transportation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    type = Column(String, nullable=False)
    capacity = Column(Integer, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    TransportationBookingList : Mapped[List["TransportationBooking"]] = relationship(back_populates="transportation")



class Booking(SAFRSBaseX, Base):
    """
    description: Table to store booking details for tours.
    """
    __tablename__ = 'bookings'
    _s_collection_name = 'Booking'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customers.id'), nullable=False)
    tour_id = Column(ForeignKey('tours.id'), nullable=False)
    booking_date = Column(DateTime)
    number_of_people = Column(Integer, nullable=False)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("BookingList"))
    tour : Mapped["Tour"] = relationship(back_populates=("BookingList"))

    # child relationships (access children)
    AccommodationBookingList : Mapped[List["AccommodationBooking"]] = relationship(back_populates="booking")
    TransportationBookingList : Mapped[List["TransportationBooking"]] = relationship(back_populates="booking")



class GuideAssignment(SAFRSBaseX, Base):
    """
    description: Table to store which guide is assigned to which tour.
    """
    __tablename__ = 'guide_assignments'
    _s_collection_name = 'GuideAssignment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    guide_id = Column(ForeignKey('guides.id'), nullable=False)
    tour_id = Column(ForeignKey('tours.id'), nullable=False)

    # parent relationships (access parent)
    guide : Mapped["Guide"] = relationship(back_populates=("GuideAssignmentList"))
    tour : Mapped["Tour"] = relationship(back_populates=("GuideAssignmentList"))

    # child relationships (access children)



class Review(SAFRSBaseX, Base):
    """
    description: Table to store reviews from customers for the tours they have participated in.
    """
    __tablename__ = 'reviews'
    _s_collection_name = 'Review'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customers.id'), nullable=False)
    tour_id = Column(ForeignKey('tours.id'), nullable=False)
    review_date = Column(DateTime)
    rating = Column(Integer, nullable=False)
    comment = Column(String)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("ReviewList"))
    tour : Mapped["Tour"] = relationship(back_populates=("ReviewList"))

    # child relationships (access children)



class TourActivity(SAFRSBaseX, Base):
    """
    description: Table to store activities included in each tour.
    """
    __tablename__ = 'tour_activities'
    _s_collection_name = 'TourActivity'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    tour_id = Column(ForeignKey('tours.id'), nullable=False)
    activity_id = Column(ForeignKey('activities.id'), nullable=False)

    # parent relationships (access parent)
    activity : Mapped["Activity"] = relationship(back_populates=("TourActivityList"))
    tour : Mapped["Tour"] = relationship(back_populates=("TourActivityList"))

    # child relationships (access children)



class AccommodationBooking(SAFRSBaseX, Base):
    """
    description: Table to store accommodation bookings connected to a tour booking.
    """
    __tablename__ = 'accommodation_bookings'
    _s_collection_name = 'AccommodationBooking'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    accommodation_id = Column(ForeignKey('accommodations.id'), nullable=False)
    booking_id = Column(ForeignKey('bookings.id'), nullable=False)

    # parent relationships (access parent)
    accommodation : Mapped["Accommodation"] = relationship(back_populates=("AccommodationBookingList"))
    booking : Mapped["Booking"] = relationship(back_populates=("AccommodationBookingList"))

    # child relationships (access children)



class TransportationBooking(SAFRSBaseX, Base):
    """
    description: Table to store transportation bookings linked to a specific tour booking.
    """
    __tablename__ = 'transportation_bookings'
    _s_collection_name = 'TransportationBooking'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    transportation_id = Column(ForeignKey('transportations.id'), nullable=False)
    booking_id = Column(ForeignKey('bookings.id'), nullable=False)

    # parent relationships (access parent)
    booking : Mapped["Booking"] = relationship(back_populates=("TransportationBookingList"))
    transportation : Mapped["Transportation"] = relationship(back_populates=("TransportationBookingList"))

    # child relationships (access children)
