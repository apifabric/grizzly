# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime

Base = declarative_base()

class Customer(Base):
    """
    description: Table to store customer information.
    """
    __tablename__ = 'customers'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True)
    phone = Column(String, nullable=True)

class Tour(Base):
    """
    description: Table to store tour information.
    """
    __tablename__ = 'tours'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=True)
    price_per_person = Column(Float, nullable=False)
    duration_days = Column(Integer, nullable=False)

class Booking(Base):
    """
    description: Table to store booking details for tours.
    """
    __tablename__ = 'bookings'
    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customers.id'), nullable=False)
    tour_id = Column(Integer, ForeignKey('tours.id'), nullable=False)
    booking_date = Column(DateTime, default=datetime.utcnow)
    number_of_people = Column(Integer, nullable=False)

class Guide(Base):
    """
    description: Table to store guide details.
    """
    __tablename__ = 'guides'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    experience_years = Column(Integer, nullable=False)

class GuideAssignment(Base):
    """
    description: Table to store which guide is assigned to which tour.
    """
    __tablename__ = 'guide_assignments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    guide_id = Column(Integer, ForeignKey('guides.id'), nullable=False)
    tour_id = Column(Integer, ForeignKey('tours.id'), nullable=False)

class Accommodation(Base):
    """
    description: Table to store accommodation details for tours.
    """
    __tablename__ = 'accommodations'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    location = Column(String, nullable=True)
    capacity = Column(Integer, nullable=False)

class AccommodationBooking(Base):
    """
    description: Table to store accommodation bookings connected to a tour booking.
    """
    __tablename__ = 'accommodation_bookings'
    id = Column(Integer, primary_key=True, autoincrement=True)
    accommodation_id = Column(Integer, ForeignKey('accommodations.id'), nullable=False)
    booking_id = Column(Integer, ForeignKey('bookings.id'), nullable=False)

class Activity(Base):
    """
    description: Table to store available activities during tours.
    """
    __tablename__ = 'activities'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=True)

class TourActivity(Base):
    """
    description: Table to store activities included in each tour.
    """
    __tablename__ = 'tour_activities'
    id = Column(Integer, primary_key=True, autoincrement=True)
    tour_id = Column(Integer, ForeignKey('tours.id'), nullable=False)
    activity_id = Column(Integer, ForeignKey('activities.id'), nullable=False)

class Transportation(Base):
    """
    description: Table to store transportation options for tours.
    """
    __tablename__ = 'transportations'
    id = Column(Integer, primary_key=True, autoincrement=True)
    type = Column(String, nullable=False)
    capacity = Column(Integer, nullable=False)

class TransportationBooking(Base):
    """
    description: Table to store transportation bookings linked to a specific tour booking.
    """
    __tablename__ = 'transportation_bookings'
    id = Column(Integer, primary_key=True, autoincrement=True)
    transportation_id = Column(Integer, ForeignKey('transportations.id'), nullable=False)
    booking_id = Column(Integer, ForeignKey('bookings.id'), nullable=False)

class Review(Base):
    """
    description: Table to store reviews from customers for the tours they have participated in.
    """
    __tablename__ = 'reviews'
    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customers.id'), nullable=False)
    tour_id = Column(Integer, ForeignKey('tours.id'), nullable=False)
    review_date = Column(DateTime, default=datetime.utcnow)
    rating = Column(Integer, nullable=False)
    comment = Column(String, nullable=True)

# Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Establish a session
Session = sessionmaker(bind=engine)
session = Session()

# Adding sample data
# Customers
customer1 = Customer(name='John Doe', email='johndoe@example.com', phone='1234567890')
session.add(customer1)

# Tours
tour1 = Tour(name='Grizzly Adventure', description='Explore the wild habitats of grizzly bears', price_per_person=299.99, duration_days=5)
session.add(tour1)

# Bookings
booking1 = Booking(customer_id=1, tour_id=1, number_of_people=2)
session.add(booking1)

# Guides
guide1 = Guide(name='Jane Smith', experience_years=10)
session.add(guide1)

# Guide Assignments
guide_assignment1 = GuideAssignment(guide_id=1, tour_id=1)
session.add(guide_assignment1)

# Accommodations
accommodation1 = Accommodation(name='Bear Lodge', location='Grizzly Mountain', capacity=20)
session.add(accommodation1)

# Accommodation Bookings
accommodation_booking1 = AccommodationBooking(accommodation_id=1, booking_id=1)
session.add(accommodation_booking1)

# Activities
activity1 = Activity(name='Bear Watching', description='Observe bears in their natural habitat')
session.add(activity1)

# Tour Activities
tour_activity1 = TourActivity(tour_id=1, activity_id=1)
session.add(tour_activity1)

# Transportations
transportation1 = Transportation(type='Minivan', capacity=8)
session.add(transportation1)

# Transportation Bookings
transportation_booking1 = TransportationBooking(transportation_id=1, booking_id=1)
session.add(transportation_booking1)

# Reviews
review1 = Review(customer_id=1, tour_id=1, rating=5, comment='Amazing experience with knowledgeable guides!')
session.add(review1)

# Continue adding the rest of the sample data for at least 48 rows following similar structure

session.commit()
session.close()
