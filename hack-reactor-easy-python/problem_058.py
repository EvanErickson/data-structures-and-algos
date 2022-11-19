# Write a function that meets these requirements.
#
# Name:       group_cities_by_state
# Parameters: a list of cities in the format "«name», «st»"
#             where «name» is the name of the city, followed
#             by a comma and a space, then the two-letter
#             abbreviation of the state
# Returns:    a dictionary whose keys are the two letter
#             abbreviations of the states in the list and
#             whose values are a list of the cities appearing
#             in that list for that state
#
# In the items in the input, there will only be one comma.
#
# Examples:
#     * input:   ["San Antonio, TX"]
#       returns: {"TX": ["San Antonio"]}
#     * input:   ["Springfield, MA", "Boston, MA"]
#       returns: {"MA": ["Springfield", "Boston"]}
#     * input:   ["Cleveland, OH", "Columbus, OH", "Chicago, IL"]
#       returns: {"OH": ["Cleveland", "Columbus"], "IL": ["Chicago"]}
#
# You may want to look up the ".strip()" method for the string.

